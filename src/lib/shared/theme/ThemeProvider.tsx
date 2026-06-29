'use client';

import { createContext, type ReactNode, useCallback, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
	// Server render and first client render both assume 'light' so hydration
	// matches. The pre-hydration script in the layout has already applied the
	// real theme class to <html>; we sync state to it on mount.
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
	}, []);

	const toggleTheme = useCallback(() => {
		setTheme((current) => {
			const next = current === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', next);
			document.documentElement.classList.toggle('dark', next === 'dark');
			return next;
		});
	}, []);

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return ctx;
}
