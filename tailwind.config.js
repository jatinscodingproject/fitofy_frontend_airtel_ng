/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
  animation: {
    float: "float 3s ease-in-out infinite",
    floatSlow: "float 5s ease-in-out infinite",
    glow: "glow 2s infinite",
    shimmer: "shimmer 2s linear infinite",
    waveLeft: "waveLeft 1.5s infinite",
    waveRight: "waveRight 1.5s infinite",
    pulseSlow: "pulse 4s infinite",
    loadingBar: "loadingBar 2.5s linear infinite"
  },
  keyframes: {
    float: {
      "0%,100%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-15px)" }
    },
    glow: {
      "0%,100%": { boxShadow: "0 0 10px #6366f1" },
      "50%": { boxShadow: "0 0 25px #8b5cf6" }
    },
    shimmer: {
      "0%": { transform: "translateX(-100%)" },
      "100%": { transform: "translateX(100%)" }
    },
    waveLeft: {
      "0%,100%": { transform: "rotate(0deg)" },
      "50%": { transform: "rotate(-30deg)" }
    },
    waveRight: {
      "0%,100%": { transform: "rotate(0deg)" },
      "50%": { transform: "rotate(30deg)" }
    },
    loadingBar: {
      "0%": { transform: "translateX(-100%)" },
      "100%": { transform: "translateX(100%)" }
    }
  }
},
extend: {
  animation: {
    fadeIn: "fadeIn 1s ease-out",
    pulseSlow: "pulse 4s infinite"
  },
  keyframes: {
    fadeIn: {
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0)" }
    }
  }
}


  },
  plugins: [],
}

