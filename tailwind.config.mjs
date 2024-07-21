/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			gold: '#978105',
			dgold: '#6c5c02',
			darkish: '#171717',
			greyish: '#404040',
		  },
		},
	  },
	plugins: [],
}
