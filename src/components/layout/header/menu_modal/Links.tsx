import { Link } from 'react-router';
import {
	IconEyeglassLine,
	IconGithubFill,
	IconLayersFill,
	IconMusicFill,
} from '@/components/ui/icons';

export default function Links() {
	const links = [
		{
			id: 1,
			name: 'Author',
			to: 'https://github.com/chronosgit',
			icon: <IconGithubFill className="max-w-5" />,
		},
		{
			id: 2,
			name: 'Features',
			to: '/features',
			icon: <IconLayersFill className="max-w-5" />,
		},
		{
			id: 3,
			name: 'Resources',
			to: '/resources',
			icon: <IconEyeglassLine className="max-w-5" />,
		},
		{
			id: 4,
			name: 'Partitures',
			to: 'https://musescore.com/',
			target: '_blank',
			icon: <IconMusicFill className="max-w-5" />,
		},
	];

	return (
		<>
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
		</>
	);
}
