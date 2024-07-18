import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
	useEffect(() => {
		const player = localStorage.getItem("mariojump.player");
		if (!player) {
			window.location.href = "/auth/register";
			return;
		}
	}, []);
	return (
		<div>
			<Outlet />
		</div>
	);
}
