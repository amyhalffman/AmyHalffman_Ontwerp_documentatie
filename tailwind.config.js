/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
};
module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  theme: {
    extend: {
      animation: {
        'gradient-linear': 'gradient-linear 1s linear infinite',
      },
      keyframes: {
        'gradient-linear': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
}
