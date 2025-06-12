export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#D6E2FC',
          DEFAULT: '#4169E1',
          dark: '#2E4CA7',
        },
        dark: {
          DEFAULT: '#0D152D',
          // frame: '#090B10',
          surface: '#151722',
          card: '#090B10',
          base: '#1F2335'
        },
        gray: {
          light: '#EEEEEE',
          DEFAULT: '#BDBDBD',
          dark: '#757575'
        },
        support: {
          red: {
            light: '#FFDDD7',
            DEFAULT: '#FF3B30',
            dark: '#BE2921'
          },
          yellow: {
            light: '#FFECB7',
            DEFAULT: '#FFCC00',
            dark: '#BE9700'
          },
          orange: '#FF9500',
          green: '#34C759',
          blue: {
            light: '#D3E6FF',
            DEFAULT: '#007AFF',
            dark: '#0059BE'
          },
        },
        stroke: '#EEEEEE',
        placeholder: '#BDBDBD',
      },
      boxShadow: {
        card: '0 0 32px 0 rgba(0, 0, 0, 0.15)',
        small: '0 0 8px 0 rgba(0, 0, 0, 0.05)'
      },
      
    },
  },
  plugins: []
}; 