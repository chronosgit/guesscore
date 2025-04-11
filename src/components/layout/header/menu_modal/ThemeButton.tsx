import { useContext } from 'react';
import ThemeContext from '@/contexts/ThemeContext';
import { IconMoonStarsFill } from '@/components/ui/icons';

export default function ThemeButton() {
	const themeCtx = useContext(ThemeContext);

	return (
		<button
			type="button"
			className="action-color-rise flex items-center gap-1"
			onClick={themeCtx?.toggleTheme}
		>
			<IconMoonStarsFill className="max-w-5" />

			<span>Theme</span>
		</button>
	);
}
