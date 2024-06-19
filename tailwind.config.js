/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['"Montserrat Alternates"', 'sans-serif'],
        lucky: ['"Luckiest Guy"', 'cursive'],
        ram: ['"Rammetto One"', 'cursive']
      },
      colors: {
        oldwhite: { DEFAULT: '#f6ead7' },
        lgreen: { DEFAULT: '#44aa68' },
        dgreen: { DEFAULT: '#21643f' },
        dorange: { DEFAULT: '#e56c25' },
        lorange: { DEFAULT: '#ff9d30' },
        pcyan: { DEFAULT: '#00b8f1' },
        agreen: { DEFAULT: '#95b334' },
        natL: { DEFAULT: '#1aaf19' },
        langL: { DEFAULT: '#e2ec0a' },
        mathL: { DEFAULT: '#fb2425' },
        artL: { DEFAULT: '#cb1ba1' },
        lifeL: { DEFAULT: '#7813bd' },
        worldL: { DEFAULT: '#7645fa' },
        nerdL: { DEFAULT: '#1b19d4' },
        sportL: { DEFAULT: '#0491e1' },
        natD: { DEFAULT: '#127a12' },
        langD: { DEFAULT: '#bac408' },
        mathD: { DEFAULT: '#c20a0a' },
        artD: { DEFAULT: '#801266' },
        lifeD: { DEFAULT: '#510f7d' },
        worldD: { DEFAULT: '#462896' },
        nerdD: { DEFAULT: '#3107a1' },
        sportD: { DEFAULT: '#0374b5' },
        grey:{DEFAULT: '#D9D9D9'}
      }
    }
  },
  plugins: []
}
