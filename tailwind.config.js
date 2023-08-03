/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html", "about.html"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#0BADE1",
				secondary: "#0E7490",
				bluebg: "#ECFEFF",
				darkbg: "#151C29",
			},
			boxShadow: {
				full: "2px 2px 2px -2px rgba(0, 0, 0, 0.2)",
			},
		},
	},
	plugins: [
		require("tailwind-typewriter")({
			wordsets: {
				job: {
					words: [
						"Frontend Developer",
						"Backend Developer",
						"Fullstack Developer",
					],
					delay: 1,
					writeSpeed: 0.1,
				},
			},
		}),
	],
};
