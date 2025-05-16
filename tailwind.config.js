/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        animation: {
          typing: 'typing 1.5s steps(40, end), blink .7s infinite'
        },
        keyframes: {
          typing: {
            from: { width: '0' },
            to: { width: '100%' }
          }, 
          blink: {
            '50%': { borderColor: 'transparent' }
          }
        }
      }
    },
    variants: {},
    plugins: []
  }
  