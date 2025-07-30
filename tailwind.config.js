/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: '0.875rem', // 14px instead of 16px
        sm: '0.75rem',    // 12px
        lg: '1rem',       // 16px
      },
      spacing: {
        '1': '0.125rem',  // 2px
        '2': '0.25rem',   // 4px
        '3': '0.5rem',    // 8px
        '4': '0.75rem',   // 12px
        '5': '1rem',      // 16px
      },
    },
  },
  plugins: [],
}

