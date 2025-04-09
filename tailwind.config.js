/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'selector',
	theme: {
		extend: {
			screens: {
				'2xs': '360px',
				xs: '480px',
			},
		},
	},
};
