/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./views/**/*.handlebars', './public/js/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
				martianMono: ['Martian Mono', 'monospace'],
				archivo: ['Archivo', 'sans-serif'],
				publicSans: ['Public Sans', 'sans-serif'],
				
			},
			color: {
				primary: '#121212'
			}
		},
	},
	plugins: [],
};
