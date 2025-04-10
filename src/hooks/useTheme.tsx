import { useEffect } from 'react';
import { z } from 'zod';
import { ThemeType } from '@/interfaces/ThemeType';

export const themeSchema = z.enum(['light', 'dark']);

export function useTheme() {
	const switchTheme = (newTheme: ThemeType) => {
		if (!themeSchema.safeParse(newTheme).success) return;

		localStorage.setItem('theme', newTheme);

		const root = document.documentElement;

		root.removeAttribute('data-theme');

		root.setAttribute('data-theme', newTheme);
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');

		if (!themeSchema.safeParse(savedTheme).success) return;

		if (savedTheme) {
			switchTheme(savedTheme as ThemeType);
		} else {
			const systemPreference = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches;

			switchTheme(systemPreference ? 'dark' : 'light');
		}
	}, []);

	return { switchTheme };
}
