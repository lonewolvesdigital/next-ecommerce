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
      colors: {
        primary: "#00B2B2", // Jamila Teal
        gold: "#C5A572",   // Jamila Gold
        'hoockers-green': '#5B7C6A',
        'pale-spring-bud': '#E6F5C9',
        'spanish-gray': '#9C9C9C',
        'light-gray': '#CCCCCC',
        'cultured-1': '#F7F7F7',
        'cultured-2': '#F2F2ED',
        'gray-web': '#7D7D7D',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      boxShadow: {
        'j-1': '0 8px 16px rgba(0,0,0,0.15)',
        'j-2': '0 4px 10px rgba(0,0,0,0.05)',
      },
      borderRadius: {
        'j-3': '3px',
      },
      transitionTimingFunction: {
        'cubic-in': 'cubic-bezier(0.51, 0.03, 0.64, 0.28)',
        'cubic-out': 'cubic-bezier(0.33, 0.85, 0.4, 0.96)',
      },
      transitionDuration: {
        'j-1': '250ms',
        'j-2': '500ms',
      },
      spacing: {
        section: '35px',
      },
      fontSize: {
        'j-1': '4.8rem',
        'j-2': '4rem',
        'j-3': '3.4rem',
        'j-4': '2.4rem',
        'j-5': '2rem',
        'j-6': '1.8rem',
        'j-7': '1.5rem',
        'j-8': '1.4rem',
        'j-9': '1.3rem',
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
    },
  },
  plugins: [],
};
export default config;
