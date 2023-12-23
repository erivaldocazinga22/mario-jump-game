import { twMerge } from "tailwind-merge";
import Player from "../components/players";
import { useGame } from "../contexts/game/gemeContext";

export default function App() {

  const { player, refs, score } = useGame();

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="flex-1 relative bg-gradient-to-t to-blue-300 from-white">
        <header>
          <div className="z-50 absolute select-none top-2 left-1/2 -translate-x-1/2 p-4 rounded-md bg-black/30 text-white">
            <h1>Player1: {player}</h1>
          </div>
          <div className="z-50 absolute select-none top-2 right-4 p-4 rounded-md bg-black/30 text-white">
            <p className="text-white m-auto">Score: {score}</p>
          </div>
        </header>

        <img src="/clouds.png" alt="" className={twMerge(`absolute w-[600px] select-none -right-[1000px] top-20 animate-clouds`)} />

        <Player.mario />

        <img src="/pipe.png" ref={refs.pipeRef} alt="pipe of game" className={twMerge(`absolute w-20 select-none-right-20 bottom-0 animate-pipe`)} />
      </div>
      <div className="w-screen h-12 bg-green-700 flex"></div>
    </div>
  )
}