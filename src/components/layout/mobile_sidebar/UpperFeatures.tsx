import { useContext } from 'react';
import GlobalLayoutContext from '@/contexts/GlobalLayoutContext';
import ThemeButton from '@/components/layout/mobile_sidebar/ThemeButton';
import { IconCloseFill, IconGithubFill } from '@/components/ui/icons';

export default function UpperFeatures() {
	const globalLayoutCtx = useContext(GlobalLayoutContext);

	return (
		<div className="mb-5 flex items-center justify-between gap-6">
			<div className="flex items-center gap-2">
				<ThemeButton />

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
