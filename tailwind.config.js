// eslint-disable-next-line no-undef
const tailwindcssAnimate = require("tailwindcss-animate");
// eslint-disable-next-line no-undef
const tailwindcss_motion = require("tailwindcss-motion");

module.exports = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	prefix: "",
	theme: {
		screens: {
			xs: { max: "430px", min: "130px" },
			sm: { max: "640px", min: "430px" },
			md: { max: "546px", min: "546px" },
			lg: { max: "546px", min: "546px" },
			xl: { max: "546px", min: "546px" },
		},
		container: {
			center: true,
			padding: "1rem",
		},
		extend: {},
	},
	plugins: [tailwindcss_motion],
};