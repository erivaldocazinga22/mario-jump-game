/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				"clouds-animation": {
					"0%": { right: "-600px" },
					"100%": { right: "120%" },
				},
			},
			animation: {
				clouds: "clouds-animation 8s infinite linear",
			},
		},
	},
	plugins: [],
};
