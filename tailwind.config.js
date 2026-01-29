/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
          light: '#38BDF8',
        },
        secondary: {
          DEFAULT: '#A855F7',
          dark: '#9333EA',
          light: '#C084FC',
        },
        neon: {
          blue: '#00F0FF',
          purple: '#BF00FF',
          pink: '#FF00FF',
        },
        dark: {
          DEFAULT: '#0A0A0F',
          lighter: '#13131A',
          card: '#1A1A27',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow-blue': 'radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(14,165,233,0.5), 0 0 20px rgba(14,165,233,0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(168,85,247,0.8), 0 0 40px rgba(168,85,247,0.5)' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(191, 0, 255, 0.5), 0 0 40px rgba(191, 0, 255, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
