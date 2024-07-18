import { useEffect, useState } from "react";

type IDataPlayer = {
	playerName: string;
	score: number;
};

type GameOverProps = {
	onRestart: () => void;
};

export const GameOver = ({ onRestart }: GameOverProps) => {
	const [dataPlayer, setDataPlayer] = useState<IDataPlayer | null>(null);
	const getDataPlayer = () => {
		const data = window.localStorage.getItem("mariojump.player");
		if (data) {
			setDataPlayer(JSON.parse(data));
		}
	};

	useEffect(() => {
		getDataPlayer();
	}, []);

	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black/30 w-full h-full flex flex-col items-center justify-center gap-4">
			<div className="p-6 rounded-xl space-y-6 backdrop-blur-sm bg-black/50 border border-zinc-500">
				<span className="block text-3xl text-red-500">GameOver</span>
				<div>
					<span className="block text-left">
						Player: {dataPlayer?.playerName ?? null}
					</span>
					<span className="block text-left">
						Score: {dataPlayer?.score ?? 0} pontos
					</span>
				</div>
				<div>
					<button
						type="button"
						onClick={onRestart}
						className="px-4 py-2 rounded-md text-sm text-lime-900 bg-lime-300"
					>
						Recomeçar
					</button>
				</div>
			</div>
		</div>
	);
};
