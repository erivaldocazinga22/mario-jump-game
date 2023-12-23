import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { gameFormSchema } from "../schemas/gameSchema";
import { useGame } from "../contexts/game/gemeContext";
import { z } from "zod";
import { useState } from "react";

export type FormDataType = z.infer<typeof gameFormSchema>;

export default function SignIn() {
    const { handleFormSubmit } = useGame();
    const [playerSelect, setPlayerSelect] = useState<"mario" | "luigi">("mario");

    const { register, handleSubmit, formState: { errors }} = useForm<FormDataType>({
        criteriaMode: "all",
        mode: "all",
        resolver: zodResolver(gameFormSchema)
    });

    const handleSelectedPlayer = (index: number)=> {
        if(index == 1) {
            setPlayerSelect("mario");
            console.log(index, playerSelect);
            return;
        }
        if(index == -1) {
            setPlayerSelect("luigi");
            console.log(index, playerSelect);
        return;
        }
    }
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-t to-blue-300 from-white overflow-hidden">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-4 justify-center mb-10">
                <div className="flex flex-col items-center">
                    <div className="mb-8 h-[150px] w-[200px] overflow-hidden flex items-end justify-center relative">
                        {playerSelect === "mario"  ? <img src="/mario.gif" alt="logo" className={`absolute w-[100px] ${playerSelect === "mario" && "animate-next"}`} />:
                        playerSelect === "luigi" && <img src="/luigi.gif" alt="logo" className={`absolute w-[100px] ${playerSelect === "luigi" && "animate-back"}`} />}
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={()=> handleSelectedPlayer(-1)} type="button" className="bg-[#ee665c] px-2 py-1 rounded-md outline-none text-zinc-50">back</button>
                        <button onClick={()=> handleSelectedPlayer(+1)} type="button" className="bg-[#ee665c] px-2 py-1 rounded-md outline-none text-zinc-50">next</button>
                    </div>
                </div>
                <h1 className="text-xl text-zinc-900">MARIO JUMP GAME</h1>
            </div>

            <input 
                {...register("playerName")}
                type="text" 
                placeholder="Name" 
                className="max-w-[300px] w-full mb-3 text-base rounded-lg p-4 outline-none text-zinc-900 border-2 border-zinc-900"
            />

            {errors.playerName?.message && <p className="text-red-500 text-sm">{errors.playerName?.message}</p>}

            <button 
                disabled={errors.playerName?.message ? true : false}
                type="submit"
                className="max-w-[300px] w-full mb-[15px] text-base rounded-lg p-4 outline-none text-zinc-50 bg-[#ee665c] disabled:bg-zinc-200 disabled:text-[#aaa]"
            >Play</button>
        </form>
    </div>
  )
}