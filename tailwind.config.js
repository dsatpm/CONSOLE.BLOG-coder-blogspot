/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./views/**/*.handlebars', './public/js/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
				martianMono: ['Martian Mono', 'monospace'],
				rubik: ['Rubik Mono One', 'sans-serif']
			}
		},
	},
	plugins: [],
};
