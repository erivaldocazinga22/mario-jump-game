/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "jump-animation": {
          "0%": {"bottom": "0%"},
          "40%": {"bottom": "180px"},
          "50%": {"bottom": "180px"},
          "60%": {"bottom": "180px"},
          "100%": {"bottom": "0%"}
        },
        "pipe-animation": {
          "0%": {"right": "-80px"},
          "100%": {"right": "100%"}
        },
        "clouds-animation": {
          "0%": {"right": "-600px"},
          "100%": {"right": "120%"}
        },
        "next-animation": {
          "0%": {"left": "-150px"},
          "100%": {"left": "0"}
        },
        "back-animation": {
          "0%": {"right": "-150px"},
          "100%": {"right": "0"}
        }
      },

      animation: {
        jump: "jump-animation .5s ease-out",
        pipe: "pipe-animation 2s infinite linear",
        clouds: "clouds-animation 8s infinite linear",
        next: "next-animation .2s linear",
        back: "back-animation .2s linear"
      }
    },
  },
  plugins: [],
}

