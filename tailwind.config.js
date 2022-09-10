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
                '500': '#FF7315',
            },
            'black': {
                '400': '#3A3535',
                '500': '#232020'
            }
        },
        extend: {},
    },
    plugins: [],
}
