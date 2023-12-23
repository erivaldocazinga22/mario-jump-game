import React from "react";
import ReactDOM from "react-dom/client";
import "./style/global.css";

import { createBrowserRouter , RouterProvider} from "react-router-dom"
import GameProvider from "./contexts/game/gameProvider.tsx";
import App from "./pages/App.tsx";
import SignIn from "./pages/SignIn.tsx";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element:<App />
  },
  {
    path: "/account",
    element: <SignIn />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GameProvider>
      <RouterProvider router={Routers} />
    </GameProvider>
  </React.StrictMode>
)
