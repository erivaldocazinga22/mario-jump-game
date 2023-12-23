import { useEffect, useRef, useState } from "react";
import { FormDataType } from "../../pages/SignIn";
import { gameContext } from "./gemeContext";

export default function GameProvider({ children }: { children:React.ReactNode}) {
    const [player, setPlayer] = useState<string>(localStorage.getItem("player") || "");

    const [pipePosition, setPipePosition] = useState<number>(0);
    const [playerPosition, setPlayerPosition] = useState<number>(0);

    const [score, setScore] = useState<number>(0);
    
    const [playerJump, setPlayerJump] = useState<boolean>(false);
    
    const  playerRef = useRef<HTMLImageElement>(null);
    const  pipeRef = useRef<HTMLImageElement>(null);

    const handleFormSubmit = (data: FormDataType) => {
        if (data.playerName ) { //&& playerSelect
            localStorage.setItem("player", data.playerName);
            setPlayer(data.playerName);
            location.href = "/";
        }
    };

    const handlePlayerJump = () => {
        if (!playerJump) {
            setScore(score + 5);
        }
        setPlayerJump(true);

        setTimeout(() => {
            setPlayerJump(false);
        }, 500);
    };

    useEffect(()=> {
        const playerName = localStorage.getItem("player");
        setPlayer(`${playerName}`);
        
        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === "ArrowUp") {
                handlePlayerJump();
            }
        };
    
        document.addEventListener("keydown", handleKeyUp);
    
        const intervalId = setInterval(() => {
            if (!pipeRef.current || !playerRef.current) {
                return;
            }
    
            const pipePosition = pipeRef.current.offsetLeft;
            const marioPosition = +window.getComputedStyle(playerRef.current).bottom.replace("px", "");
    
            if (pipePosition >= 120 && pipePosition > 0 && marioPosition > 80) {
                setPipePosition(pipePosition);
                setPlayerPosition(marioPosition);
            }
        }, 500);
    
        return () => {
            document.removeEventListener("keydown", handleKeyUp);
            clearInterval(intervalId)
        };
    },[]);

    return (
        <gameContext.Provider value={{ 
            player, playerJump, score,
            refs: { playerRef, pipeRef }, 
            positions: { pipePosition, playerPosition }, 
            handleFormSubmit 
        }}>
            {children}
        </gameContext.Provider>
    )
}
