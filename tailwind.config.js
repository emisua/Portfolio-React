module.exports = {
  content: [
    './index.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './componentes/*.{vue,js,ts,jsx,tsx}',
    './componentes/paginas/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
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
      black: '#000',
      js: '#f8e018',
      react: '#61dafb',
      prestashop: '#e2076f'
    }
  },
  plugins: []
}
