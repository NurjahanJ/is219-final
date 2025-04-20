/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Explorer Archetype Colors
        primary: {
          50: '#e6f0f0',
          100: '#cce1e1',
          200: '#99c3c3',
          300: '#66a5a5',
          400: '#338787',
          500: '#2f4f4f', // Forest Green
          600: '#263f3f',
          700: '#1c2f2f',
          800: '#132020',
          900: '#091010',
        },
        secondary: {
          50: '#faf7f0',
          100: '#f5efe1',
          200: '#ebdfc3',
          300: '#e2d0a5',
          400: '#d8c087',
          500: '#c2b280', // Sandstone
          600: '#9b8e66',
          700: '#746a4d',
          800: '#4d4733',
          900: '#26231a',
        },
        accent: {
          50: '#f0f9fd',
          100: '#e1f3fb',
          200: '#c3e7f7',
          300: '#a5dbf3',
          400: '#87ceeb', // Sky Blue
          500: '#6ca5bc',
          600: '#517c8d',
          700: '#3d5d69',
          800: '#283e46',
          900: '#141f23',
        },
        neutral: {
          50: '#e6e8eb',
          100: '#ccd1d7',
          200: '#99a3af',
          300: '#667587',
          400: '#33475f',
          500: '#001f3f', // Navy
          600: '#001932',
          700: '#001326',
          800: '#000c19',
          900: '#00060d',
        },
        // Semantic Colors
        success: {
          light: '#dcfce7',
          DEFAULT: '#22c55e',
          dark: '#15803d',
        },
        error: {
          light: '#fee2e2',
          DEFAULT: '#ef4444',
          dark: '#b91c1c',
        },
        warning: {
          light: '#fef3c7',
          DEFAULT: '#f59e0b',
          dark: '#b45309',
        },
        // System Colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
}