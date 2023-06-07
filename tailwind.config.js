/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
				'primary-bg': '#ffffff',
				'secondary-bg': '#f9fafb',
				'primary-text': '#20232e',
				'secondary-text': '#f48840',
				'paragraph-text': '#7a7a7a',
				'span-text': '#aaaaaa',
				'dark-primary-bg': '#121119',
				'dark-secondary-bg': '#08080e',
				'dark-primary-text': '#e8e6e3',
				'dark-secondary-text': '#e8e6e399',
			},
		},
	},
	plugins: [],
};
