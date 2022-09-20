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
			},
			'grey': {
				'300': 'rgb(209 213 219)'
			}
		},
		extend: {},
	},
	screens: {
		'sm': '640px',
		// => @media (min-width: 640px) { ... }

		'md': '768px',
		// => @media (min-width: 768px) { ... }

		'lg': '1024px',
		// => @media (min-width: 1024px) { ... }

		'xl': '1280px',
		// => @media (min-width: 1280px) { ... }

		'2xl': '1536px',
		// => @media (min-width: 1536px) { ... }
	},
	plugins: [],
};
