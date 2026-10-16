import type { Theme } from "@utils/types";

export function setTheme(theme: Theme, doc = window.document) {
	doc.documentElement.setAttribute("data-theme", theme);
	localStorage.setItem("theme", theme);
}

export function setThemeToAuto(doc = window.document) {
	doc.documentElement.removeAttribute("data-theme");
	localStorage.removeItem("theme");
}

export function getTheme() {
	return localStorage.getItem("theme" as Theme) || null;
}
