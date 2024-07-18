import pipe from "@/app/assets/pipe.png";

type ObstaclesProps = {
	position: number;
};

export const Obstacles = ({ position }: ObstaclesProps) => {
	/* if (position <= 20) {
		console.log("pipe :" + position);
	} */
	return (
		<div
			className="absolute bottom-0 w-12 h-12"
			style={{ left: `${position}%` }}
		>
			<img src={pipe} alt="Pipe" className="w-full h-full object-cover" />
		</div>
	);
};
