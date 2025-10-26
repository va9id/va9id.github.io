const btn = document.getElementById("theme-toggle");

const cycleMode = () => {
	const html = document.documentElement;
	const dark = html.getAttribute("data-theme") === "dark";
	if (dark) {
		html.removeAttribute("data-theme");
		localStorage.setItem("theme", "light");
		btn.textContent = "🌙";
	} else {
		html.setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
		btn.textContent = "☀️";
	}
};

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
	document.documentElement.setAttribute("data-theme", "dark");
	btn.textContent = "☀️";
} else if (savedTheme === "light") {
	document.documentElement.removeAttribute("data-theme");
	btn.textContent = "🌙";
}

btn.addEventListener("click", cycleMode);
