// Navbar line
const navbar = document.querySelector("#navbar");
const menu = document.querySelector("#menu");

navbar.addEventListener("click", function () {
	navbar.classList.toggle("navbar-active");
	menu.classList.toggle("hidden");
});

// Navbar Fixed
window.onscroll = function () {
	const header = document.querySelector("header");
	const fixednav = header.offsetTop;

	if (window.pageYOffset > fixednav) {
		header.classList.add("navbar-fixed");
	} else {
		header.classList.remove("navbar-fixed");
	}
};

// Dark Mode
const darkToggle = document.querySelector("#darkmode");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
	if (darkToggle.checked) {
		html.classList.add("dark");
	} else {
		html.classList.remove("dark");
	}
});
