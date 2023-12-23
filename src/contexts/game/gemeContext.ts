import { createContext, useContext } from "react";
import { FormDataType } from "../../pages/SignIn";

type gameContextType = {
    score: number
    player: string
    playerJump: boolean
    positions: {
        pipePosition: number
        playerPosition: number
    }
    refs: {
        playerRef: React.RefObject<HTMLImageElement>
        pipeRef: React.RefObject<HTMLImageElement>
    }
    
    handleFormSubmit: (data: FormDataType)=> void
}


export const gameContext = createContext({} as gameContextType);
export const useGame = ()=> useContext(gameContext);