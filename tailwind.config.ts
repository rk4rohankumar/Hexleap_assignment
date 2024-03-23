import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit', // Just-in-Time compiler mode for faster build times (optional)
  darkMode: 'class', // Enable dark mode variants
  
  // Specify the content paths for PurgeCSS
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Define dark mode colors here
        dark: {
          // Example dark mode color definitions
          black: '#000',
          gray: {
            50: '#f9fafb',
            // Add more gray shades as needed
          },
          // Add more colors as needed
        },
      },
    },
  },
  
  plugins: [],
};

export default config;
