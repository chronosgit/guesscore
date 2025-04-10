import { ReactNode } from 'react';
import { Link } from 'react-router';
import ActionElementWrapper from '@/components/layout/header/ActionElementWrapper';

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
		<ActionElementWrapper>
			<Link to={to} target={linkTarget} className="flex items-center gap-1">
				{children}

				<span className="font-medium">{label}</span>
			</Link>
		</ActionElementWrapper>
	);
}
