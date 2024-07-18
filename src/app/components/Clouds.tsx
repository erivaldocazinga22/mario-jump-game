import clouds from "@/app/assets/clouds.png";

export const Clouds = () => {
	return (
		<div className="absolute w-[600px] select-none -right-[1000px] top-20 animate-clouds">
			<img src={clouds} />
		</div>
	);
};
