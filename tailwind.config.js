/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	safelist: [
		{
			pattern:
				/bg-(red|green|blue|purple|pink|indigo|gray|yellow)-(100|200|300|400|500|600|700|800|900)/,
			pattern: /bg-{hex}/,
		},
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
