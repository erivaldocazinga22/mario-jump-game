import mario from "@/app/assets/mario.gif";
import marioGameOver from "@/app/assets/game-over.png";

type PlayerProps = {
	character: "mario" | "luigi";
	position: number;
	gameOver: boolean;
};

export const Player = ({ position, gameOver }: PlayerProps) => {
	/* if (position >= 48) {
		console.log("mario :" + position);
	} */

	return (
		<div
			className={`absolute left-12 w-16 h-16 transition-all duration-75`}
			style={{
				bottom: position,
			}}
		>
			<img
				src={gameOver ? marioGameOver : mario}
				className="w-full h-full object-cover"
			/>
		</div>
	);
};
