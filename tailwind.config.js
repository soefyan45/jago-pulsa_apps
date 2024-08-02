/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
				poppins: ['Poppins'],
			},
      colors: {
				'biru1' : '#0B2F74',
				'biru2' : '#315EB2',
				'biru3' : '#0B8BCC',
				'biru4' : '#7895CB',
				'biru5' : '#F7F5FF',
        //
				'gold1' : '#C19113',
				'gold2' : '#DCB657',
				'gold3' : '#FDE19B',
				'gold4' : '#FFF5DD',
        //
        'abu5' : '#FAFAFA',
        //
        'putih' : '#FFFFFF',
			},
      fontSize: {
				// 'mediumbig' : '55px',
				'12' 		: '12px',
				'13' 		: '13px',
				'15' 		: '15px',
				'19' 		: '19px',
			},
      letterSpacing: {
        '0-15' : '0.15px'
      },
    },
  },
  plugins: [],
}

