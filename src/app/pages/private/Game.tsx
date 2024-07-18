import { Clouds } from "@/app/components/Clouds";
import { GameOver } from "@/app/components/GameOver";
import { Obstacles } from "@/app/components/Obstacles";
import { Player } from "@/app/components/player";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Game() {
	const [isGameOver, setIsGameOver] = useState(false);
	const [playerPosition, setPlayerPosition] = useState(0);
	const [obstaclePosition, setObstaclePosition] = useState(100);
	const gameAreaRef = useRef<HTMLDivElement>(null);
	const [scoreGame, setScoreGame] = useState(0);

	const checkCollision = useCallback(() => {
		if (
			obstaclePosition <= 16 &&
			playerPosition < 48 &&
			obstaclePosition >= 10
		) {
			return true;
		}
		return false;
	}, [obstaclePosition, playerPosition]);

	const handleJump = useCallback(() => {
		if (isGameOver) {
			setObstaclePosition((prev) => prev);
			return;
		}

		setPlayerPosition(() => {
			setTimeout(() => {
				setPlayerPosition(0);
			}, 500);
			return 50;
		});
	}, [isGameOver]);

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			if (event.code === "Space") {
				handleJump();
			}
		};

		document.addEventListener("keydown", handleKeyPress);

		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [handleJump]);

	useEffect(() => {
		if (isGameOver) {
			setObstaclePosition((prev) => prev);
			setScoreGame(0);
			const playerData = localStorage.getItem("mariojump.player");
			if (playerData) {
				const player = JSON.parse(playerData);
				localStorage.setItem(
					"mariojump.player",
					JSON.stringify({
						playerName: player.playerName,
						score: scoreGame,
					})
				);
			}
			return;
		}

		const gameLoop = setInterval(() => {
			setScoreGame((prev) => prev + 1);
			setObstaclePosition((prev) => {
				if (prev <= 0) {
					return 100;
				}
				return prev - 1;
			});

			if (checkCollision()) {
				setIsGameOver(true);
				clearInterval(gameLoop);
			}
		}, 30);

		return () => {
			clearInterval(gameLoop);
		};
	}, [checkCollision, isGameOver, playerPosition]);

	return (
		<div
			tabIndex={0}
			ref={gameAreaRef}
			className="min-h-screen max-h-screen flex flex-col overflow-hidden"
		>
			<div className="relative flex-1 bg-gradient-to-t to-cyan-300 from-white">
				<header className="p-4 flex justify-between px-6">
					<h1 className="text-center font-bold text-white">Mario Jump</h1>
					<p className="text-center text-white">Score: {scoreGame}</p>
				</header>
				{isGameOver && (
					<GameOver
						onRestart={() => {
							setIsGameOver(false);
							setObstaclePosition(100);
							setPlayerPosition(0);
						}}
					/>
				)}
				<Clouds />
				<Player
					character="mario"
					gameOver={isGameOver}
					position={playerPosition}
				/>
				<Obstacles position={obstaclePosition} />
			</div>
			<div className="h-12 bg-green-700" />
		</div>
	);
}
