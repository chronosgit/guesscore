import { useEffect, useState } from 'react';
import { ThemeType } from '@/interfaces/ThemeType';

export default function useTheme() {
	const [theme, setTheme] = useState<ThemeType>('light');

	const switchTheme = (newTheme: ThemeType) => {
		if (!['light', 'dark'].includes(newTheme)) return;

		setTheme(newTheme);

		localStorage.setItem('theme', newTheme);

		const root = document.documentElement;
		root.removeAttribute('data-theme');
		root.setAttribute('data-theme', newTheme);
	};

	const toggleTheme = () => {
		const theme = document.documentElement.getAttribute('data-theme');

		switch (theme) {
			case 'light':
				switchTheme('dark');

				break;
			case 'dark':
				switchTheme('light');

				break;
			default:
				switchTheme('light');

				break;
		}
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');

		if (!['light', 'dark'].includes(String(savedTheme))) return;

		if (savedTheme) {
			switchTheme(savedTheme as ThemeType);
		} else {
			const systemPreference = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches;

			switchTheme(systemPreference ? 'dark' : 'light');
		}
	}, []);

	return { theme, switchTheme, toggleTheme };
}
