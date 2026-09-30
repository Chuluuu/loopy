import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '2rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
        '3xl': ['2rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.5rem', { lineHeight: '3rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontFamily: {
        sans: ["var(--font-onest)", ...fontFamily.sans],
        display: ["var(--font-onest)", ...fontFamily.sans],
      },
      colors: {
        // Brand teal, anchored on the logo color #1b5a7a (brand-600)
        brand: {
          50: "#eef6f9",
          100: "#d6e9f0",
          200: "#aed2e1",
          300: "#7cb4cb",
          400: "#4a93b0",
          500: "#2b7596",
          600: "#1b5a7a",
          700: "#174a65",
          800: "#143d53",
          900: "#102f40",
          950: "#0a1f2b",
        },
        // Logo gold (the dark-mode logo color); used only on brand-teal surfaces
        gold: {
          100: "#fef6d8",
          200: "#fdedb3",
          300: "#FCE28B",
          400: "#f6cf5a",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
        fadeAndMove: {
          '0%': { opacity: "0", top: '10%' }, 
          '100%': { opacity: "1", top: '12%' }, 
        }, 
        fadeAndMove1: {
          '0%': { opacity: "0", top: '6%' }, 
          '100%': { opacity: "1", top: '8%' }, 
        }, 
        fadeAndMoveSlide1: {
          '0%': { opacity: "0", top: '-20%' }, 
          '100%': { opacity: "1", top: '-10%' }, 
        },
        fadeAndMoveSlide2: {
          '0%': { opacity: "0", top: '-50%' }, 
          '100%': { opacity: "1", top: '-35%' }, 
        },
        fadeAndMoveSlide4: {
          '0%': { opacity: "0", top: '-50%' }, 
          '100%': { opacity: "1", top: '-30%' }, 
        },
        fadeAndMoveSlide5: {
          '0%': { opacity: "0", left: '10%' }, 
          '100%': { opacity: "1", left: '30%' }, 
        },
        fadeAndMoveSlide6: {
          '0%': { opacity: "0", left: '90%' }, 
          '100%': { opacity: "1", left: '60%' }, 
        },
        fadeScale: {
          '0%': { opacity: "0", transform: 'scale(0.9)' }, // Start at 90% scale
          '100%': { opacity: "1", transform: 'scale(1)' }, // End at 100% scale
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-and-move': 'fadeAndMove 1s ease-in-out',
        'fade-and-move1': 'fadeAndMove1 1s ease-in-out',
        'fade-and-move2': 'fadeAndMoveSlide1 1s ease-in-out',
        'fade-and-move3': 'fadeAndMoveSlide2 1s ease-out',
        'fade-and-move4': 'fadeAndMoveSlide4 1s ease-out',
        'fade-and-move5': 'fadeAndMoveSlide5 1s ease-out',
        'fade-and-move6': 'fadeAndMoveSlide6 1s ease-out',
        'fade-scale': 'fadeScale 1s ease-in-out', 
        'slide': 'slide 30s linear infinite',
        'slideReverse': 'slideReverse 30s linear infinite',

      },
      maxWidth: {
        '8xl': '88rem',
        '10xl':'100rem'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config