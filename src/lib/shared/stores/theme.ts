import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Check for saved theme preference or default to 'light'
const getInitialTheme = (): 'light' | 'dark' => {
	if (!browser) return 'light';

	const saved = localStorage.getItem('theme');
	if (saved === 'dark') return 'dark';
	if (saved === 'light') return 'light';

	// Check system preference
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}

	return 'light';
};

export const theme = writable<'light' | 'dark'>(getInitialTheme());

// Subscribe to theme changes and update localStorage and document class
if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);

		if (value === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
}

export const toggleTheme = () => {
	theme.update((current) => (current === 'light' ? 'dark' : 'light'));
};
