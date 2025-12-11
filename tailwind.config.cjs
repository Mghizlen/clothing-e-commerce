const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html','./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#fbfaf8',
        fg: '#111111',
        primary: '#0a0a0a',
        'primary-foreground': '#ffffff',
        secondary: '#f5f0ea',
        'secondary-foreground': '#2e2a27',
        muted: '#f0edeb',
        'muted-foreground': '#8a857f',
        accent: '#cdb892',
        'accent-foreground': '#111111',
        destructive: '#e85a4f',
        'destructive-foreground': '#ffffff',
        success: '#dff3e4',
        warning: '#ffe8b2',
        card: '#ffffff',
        'card-foreground': '#111111',
        sidebar: '#ffffff',
      },
      fontFamily: {
        heading: ['Playfair Display','serif'],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        site: '1200px',
      },
      spacing: {
        '14': '3.5rem',
        '18': '4.5rem'
      }
    }
  },
  plugins: [],
};
