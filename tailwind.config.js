module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './componentes/*.{vue,js,ts,jsx,tsx}',
    './componentes/paginas/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      lineHeight: {
        homeh1: 'clamp(5rem,10vw,6.4rem)',
        homeh2: 'clamp(1.5rem, 2.5vw, 4rem)'
      },
      fontSize: {
        homeh1: 'clamp(5rem, 10vw, 7rem)',
        homeh2: 'clamp(1.5rem, 2.5vw, 4rem)'
      },
      gridTemplateColumns: {
        projects: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
        tecno: 'repeat(auto-fill, minmax(min(100%, 64px), 1fr))'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        lighter: '#f6f6f6',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
        'tag-wordpress': 'hsla(323, 100%, 67%, 0.8)',
        'tag-kadence': 'hsla(34, 100%, 50%, 0.8)',
        primary: 'hsl(21, 100%, 69%)',
        'primary-dark': 'hsl(21, 100%, 40%)',
        'primary-darker': 'hsl(21, 100%, 20%)',
        'primary-light': 'hsl(23, 100%, 79%)',
        'primary-light-80': 'hsla(23, 100%, 79%, 0.8)',
        'primary-light-90': 'hsla(23, 100%, 79%, 0.9)',
        secondary: 'hsl(197, 20%, 64%)',
        'secondary-dark': 'hsl(197, 20%, 40%)',
        'secondary-darker': 'hsl(197, 20%, 20%)',
        'secondary-light': 'hsl(196, 19%, 85%)',
        'secondary-light-80': 'hsl(196, 19%, 85%, 0.8)',
        'secondary-light-90': 'hsl(196, 19%, 85%, 0.9)',
        'white-10': 'hsla(0, 0%, 100%, 0.5)',
        'text-dark': 'hsl(197deg 20% 30%)',
        darkest: 'hsl(216deg 17% 12%)',
        black: '#000',
        js: '#f8e018',
        react: '#61dafb',
        prestashop: '#e2076f'
      },
      width: {
        container: 'calc(100% - 2rem)'
      }
    },
    fontFamily: {
      'fira-code': ['Fira Code', 'sans-serif'],
      bebas: ['Bebas Neue', 'cursive']
    },
    minHeight: {
      home: 'calc(100vh - 5rem)',
      full: '100%'
    },
    container: {
      padding: '1rem',
      center: true
    }
  },
  plugins: []
}
