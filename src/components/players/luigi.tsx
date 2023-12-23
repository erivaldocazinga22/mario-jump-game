import { twMerge } from "tailwind-merge";
import { useGame } from "../../contexts/game/gemeContext";

export default function Luigi() {
    const { refs, playerJump } = useGame();
    
    return (
        <>
            <img 
                ref={refs.playerRef}
                src="/luigi.gif" 
                alt="luigi player" 
                className={twMerge(`absolute w-[130px] bottom-0 ${playerJump && "animate-jump"}`)} 
            />   
        </>
    )   
}