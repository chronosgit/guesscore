import { useContext } from 'react';
import ThemeContext from '@/contexts/ThemeContext';
import { IconMoonStarsFill, IconSunFogFill } from '@/components/ui/icons';

export default function ThemeButton() {
	const themeCtx = useContext(ThemeContext);

	return (
		<button
			type="button"
			className="action-color-rise flex items-center gap-0.5"
			onClick={themeCtx?.toggleTheme}
		>
			{themeCtx?.theme === 'dark' ? (
				<IconMoonStarsFill className="max-w-5" />
			) : (
				<IconSunFogFill className="max-w-5" />
			)}

			<span className="text-sm font-medium">Theme</span>
		</button>
	);
}
