import { Link } from 'react-router';
import HeaderMiddleElement from '@/components/layout/header/HeaderMiddleElement';
import Logo from '@/components/ui/Logo';
import {
	IconEyeglassLine,
	IconLayersFill,
	IconMenuFill,
	IconMusicFill,
} from '@/components/ui/icons';
import useScreenBreakpoints from '@/hooks/useScreenBreakpoints';

export default function Header() {
	const { isScreenMD } = useScreenBreakpoints();

	if (!isScreenMD) return;

	return (
		<header className="text-primary-300 bg-background-400 mb-4 px-3 py-2">
			<div className="mx-auto flex max-w-[75rem] items-center justify-between">
				<Link to="/">
					<Logo className="max-w-6" />
				</Link>

				<div className="flex items-center gap-6">
					<HeaderMiddleElement to="/features" label="Features">
						<IconLayersFill className="max-w-5" />
					</HeaderMiddleElement>

					<HeaderMiddleElement to="/resources" label="Resources">
						<IconEyeglassLine className="max-w-5" />
					</HeaderMiddleElement>

					<HeaderMiddleElement
						to="https://musescore.com/"
						label="Partitures"
						linkTarget="_blank"
					>
						<IconMusicFill className="max-w-5" />
					</HeaderMiddleElement>
				</div>

				<button type="button">
					<IconMenuFill className="max-w-5" />
				</button>
			</div>
		</header>
	);
}
