/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#F9F9F9'
			},
			borderRadius: {
				sm: '8px'
			}
		}
	},
	plugins: []
};
