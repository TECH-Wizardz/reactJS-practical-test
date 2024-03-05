/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-color": "#1d4ed8",
        "bg-blue-color": "#eef2ff",
        "secondary-blue-color": "#e0f2fe",
      },
    },
  },
  plugins: [],
};
