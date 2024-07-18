import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { RouterProvider } from "react-router-dom";
import { Routers } from "./routers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={Routers} />
	</React.StrictMode>
);
