/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': {
				'300': '#F4F4F4',
			},
			'orange': {
				'300':'rgb(253 186 116)',
				'400':'rgb(251 146 60)',
				'500': '#FF7315',
				'700': 'rgb(194 65 12)',
			},
			'black': {
				'400': '#3A3535',
				'500': '#232020',
			},
			'green': {
				'500': 'rgb(34 197 94)',
			}
		},
		extend: {},
	},
	plugins: [],
};
