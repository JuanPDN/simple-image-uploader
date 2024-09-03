import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        "3662E3": "#3662E3",
        "C2DAF9": "#C2DAF9",
        "121826": "#121826",
        "E5E7EB": "#E5E7EB",
        "FFFFFF": "#FFFFFF",
        "F9FAFB": "#F9FAFB",
        "212936": "#212936",
        "4D5562": "#4D5562",
        "F9FAFBCC": "#F9FAFBCC",
      }
    },
  },
  plugins: [],
};
export default config;
