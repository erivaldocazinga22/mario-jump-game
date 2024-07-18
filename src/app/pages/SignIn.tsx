import { signInRequest, signInSchema } from "@/core/models/signin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<signInRequest>({
		mode: "all",
		criteriaMode: "firstError",
		resolver: zodResolver(signInSchema),
	});

	const handler = (data: signInRequest) => {
		window.localStorage.setItem(
			"mariojump.player",
			JSON.stringify({ ...data, score: 0 })
		);
		window.location.href = "/";
	};

	return (
		<div className="h-screen flex items-center justify-center">
			<form
				onSubmit={handleSubmit(handler)}
				className="w-full lg:max-w-[400px]"
			>
				<div className="flex flex-col gap-1">
					<label htmlFor="playername">Player Name</label>
					<input
						type="text"
						{...register("playerName")}
						placeholder="Nome do novo player"
						className="px-4 py-2 rounded-md flex-1 w-full max-w-full outline-none focus:ring-1 focus:ring-lime-300"
					/>
					<div className="h-10 place-items-center">
						{errors.playerName && (
							<p className="text-xs text-red-500">
								{errors.playerName.message}
							</p>
						)}
					</div>
				</div>
				<button
					type="submit"
					className="w-full px-4 py-2 rounded-md flex items-center justify-center gap-2 text-zinc-900 bg-lime-300"
				>
					Entrar
				</button>
			</form>
		</div>
	);
}
