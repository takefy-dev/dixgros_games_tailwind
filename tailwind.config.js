module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
       "board" :'#ced4da',
      },
      borderRadius: {
        '30px': "30px",
      },
      spacing: {
        '27rm': '27rem'
      },
      gridTemplateRows: {
        '42': 'repeat(42, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}
