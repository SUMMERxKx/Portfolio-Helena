/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4E9DD',
        accent: '#BA8D68',
        background: '#1C1512',
        highlight: '#2B201B',
        muted: 'rgba(244, 233, 221, 0.7)',
      },
      fontFamily: {
        display: ['Poppins', 'Quicksand', 'sans-serif'],
        body: ['Quicksand', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        cozy: '0 4px 10px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        cozy: '1rem',
      },
    },
  },
  plugins: [],
}
