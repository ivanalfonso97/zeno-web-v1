import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#D3F9E5',
          DEFAULT: '#49E9A9',
          dark: '#207453',
        },
        dark: '#0D152D',
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
      }
    },
  },
  plugins: [],
}
export default config;
