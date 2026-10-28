/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#04060d',
          900: '#080c18',
          850: '#0d1322',
          800: '#131b2e',
          700: '#1e293b',
          600: '#334155',
        },
        neon: {
          cyan: '#00f0ff',
          green: '#00ff9f',
          purple: '#b026ff',
          pink: '#ff007f',
          yellow: '#ffe600',
        }
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px -2px rgba(0, 240, 255, 0.5), 0 0 40px -4px rgba(0, 240, 255, 0.2)',
        'glow-green': '0 0 20px -2px rgba(0, 255, 159, 0.5), 0 0 40px -4px rgba(0, 255, 159, 0.2)',
        'glow-purple': '0 0 20px -2px rgba(176, 38, 255, 0.5), 0 0 40px -4px rgba(176, 38, 255, 0.2)',
        'glow-pink': '0 0 20px -2px rgba(255, 0, 127, 0.5), 0 0 40px -4px rgba(255, 0, 127, 0.2)',
        'inner-glow': 'inset 0 0 15px rgba(0, 240, 255, 0.15)',
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.08) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(176, 38, 255, 0.7))' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
