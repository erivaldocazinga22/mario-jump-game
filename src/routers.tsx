import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./app/pages/Layout";
import SignIn from "./app/pages/SignIn";
import RootLayout from "./app/pages/private/Layout";
import Game from "./app/pages/private/Game";

export const Routers = createBrowserRouter([
	{
		element: <PublicLayout />,
		children: [
			{
				path: "/auth/register",
				element: <SignIn />,
			},
		],
	},
	{
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Game />,
			},
		],
	},
]);
