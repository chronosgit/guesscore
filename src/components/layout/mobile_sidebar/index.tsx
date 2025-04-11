import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import GlobalLayoutContext from '@/contexts/GlobalLayoutContext';
import UpperFeatures from '@/components/layout/mobile_sidebar/UpperFeatures';
import FeatureDropdown from '@/components/layout/mobile_sidebar/FeatureDropdown';
import {
	IconEyeglassLine,
	IconLayersFill,
	IconMusicFill,
} from '@/components/ui/icons';
import useClickaway from '@/hooks/useClickaway';
import useToggle from '@/hooks/useToggle';

export default function MobileSidebar() {
	const { value: isMounted, changeValue } = useToggle();

	const mobileSidebarRef = useRef(null);

	const globalLayoutCtx = useContext(GlobalLayoutContext);

	useClickaway(mobileSidebarRef, () => {
		changeValue(false);

		setTimeout(() => globalLayoutCtx?.changeMobileSidebar(false), 200);
	});

	const links = [
		{
			id: 1,
			name: 'Features',
			to: '/features',
			icon: <IconLayersFill className="max-w-5" />,
		},
		{
			id: 2,
			name: 'Resources',
			to: '/resources',
			icon: <IconEyeglassLine className="max-w-5" />,
		},
		{
			id: 3,
			name: 'Partitures',
			to: 'https://musescore.com/',
			target: '_blank',
			icon: <IconMusicFill className="max-w-5" />,
		},
	];

	useEffect(() => {
		changeValue(true);
	}, []);

	if (!globalLayoutCtx?.isMobileSidebar) return;

	return (
		<div
			ref={mobileSidebarRef}
			className={`text-primary-300 bg-background-400 fixed top-0 right-0 bottom-0 z-20 p-1.5 pt-4 transition-transform ${isMounted ? 'shadow-overlay translate-x-0' : 'translate-x-full'} `}
		>
			<UpperFeatures />

			<div className="space-y-2">
				<FeatureDropdown featureName="Links">
					<ul className="space-y-2">
						{links.map((l) => (
							<li key={l.id}>
								<Link
									to={l.to}
									target={l.target ?? '_self'}
									className="action-color-rise flex items-center gap-1"
								>
									{l.icon}

									<span>{l.name}</span>
								</Link>
							</li>
						))}
					</ul>
				</FeatureDropdown>

				<FeatureDropdown featureName="Hotkeys">
					<p>Under development...</p>
				</FeatureDropdown>
			</div>
		</div>
	);
}
