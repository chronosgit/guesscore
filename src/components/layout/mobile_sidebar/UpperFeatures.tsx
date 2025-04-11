import { useContext } from 'react';
import ThemeContext from '@/contexts/ThemeContext';
import GlobalLayoutContext from '@/contexts/GlobalLayoutContext';
import {
	IconCloseFill,
	IconGithubFill,
	IconMoonStarsFill,
} from '@/components/ui/icons';

export default function UpperFeatures() {
	const themeCtx = useContext(ThemeContext);
	const globalLayoutCtx = useContext(GlobalLayoutContext);

	return (
		<div className="mb-5 flex items-center justify-between gap-6">
			<div className="flex items-center gap-2">
				<button
					type="button"
					className="action-color-rise flex items-center gap-0.5"
					onClick={themeCtx?.toggleTheme}
				>
					<IconMoonStarsFill />

					<span className="text-sm font-medium">Theme</span>
				</button>

				<a
					href="https://github.com/chronosgit"
					target="_blank"
					className="action-color-rise flex items-center gap-0.5"
				>
					<IconGithubFill />

					<span className="text-sm font-medium">Author</span>
				</a>
			</div>

			<button
				type="button"
				onClick={() => globalLayoutCtx?.changeMobileSidebar(false)}
			>
				<IconCloseFill />
			</button>
		</div>
	);
}
