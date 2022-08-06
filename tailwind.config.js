module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'gray-blue': 'hsl(237, 18%, 59%)',
				'soft-red': 'hsl(345, 95%, 68%)',
				'desaturated-blue': 'hsl(236, 21%, 26%)',
				'dark-blue': 'hsl(235, 16%, 14%)',
				'very-dark-blue': 'hsl(234, 17%, 12%)',
			},
			animation: {
				flip: 'flip 1s linear',
			},
			keyframes: {
				flip: {
					'0%': { },
					'100%': { transform: 'scaleY(-1)', transformOrigin: 'bottom center' },
				},
			},
		},
	},
	plugins: [],
};
