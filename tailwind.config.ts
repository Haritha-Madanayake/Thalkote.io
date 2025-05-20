import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "xtreme-black": "#000000",
        "xtreme-orange": "#FF6B00",
        "xtreme-light-orange": "#D6701B",
        "xtreme-yello": "#FEAE28",
        "xtreme-white": "#F2F2F2",
        "xtreme-silver": "#121212"
      },
      fontSize: {
        'xtreme-extra-small': '1rem',
        'xtreme-small': '1.5rem',
        'xtreme-medium': '2.5rem',
        'xtreme-large': '3.5rem',
        'xtreme-extra-large': '4rem',
        'xtreme-super-large': '8rem'
      },
      backgroundImage: {
        'orange-fireball':'radial-gradient(ellipse, rgb(255 107 0 / 26%) 0%, rgba(0, 0, 0, 1) 72%)',
        'orange-line':'linear-gradient(90deg, hsla(0, 0%, 0%, 0) 0%,  hsla(25, 75%, 14%, 1) 180%);  '
      },
      letterSpacing: {
        'xtreme-super': '1.5rem'
      },
    },
  },
  plugins: [],
};
export default config;
