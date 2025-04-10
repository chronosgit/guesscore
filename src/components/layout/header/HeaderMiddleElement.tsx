import { ReactNode } from 'react';
import { Link } from 'react-router';

interface Props {
	to: string;
	label: string;
	linkTarget?: '_blank' | '_self' | '_parent' | '_top' | string;
	children?: ReactNode;
}

export default function HeaderMiddleElement({
	to,
	label,
	linkTarget,
	children,
}: Props) {
	return (
		<Link to={to} target={linkTarget} className="flex items-center gap-1">
			{children}

			<span className="font-medium">{label}</span>
		</Link>
	);
}
