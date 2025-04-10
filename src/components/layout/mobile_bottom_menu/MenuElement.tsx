import { ReactNode } from 'react';
import { Link } from 'react-router';

interface Props {
	text: string;
	to?: string;
	linkTarget?: '_blank' | '_self' | '_parent' | '_top' | string;
	isLink?: boolean;
	isButton?: boolean;
	children: ReactNode;
}

export default function MenuElement({
	text,
	to,
	linkTarget,
	isLink,
	isButton,
	children,
}: Props) {
	if (isLink) {
		return (
			<Link
				to={to ?? ''}
				target={linkTarget}
				className="flex flex-col items-center"
			>
				{children}

				<span className="text-xs font-semibold capitalize">{text}</span>
			</Link>
		);
	}

	if (isButton) {
		return (
			<button type="button" className="flex flex-col items-center">
				{children}

				<span className="text-xs font-semibold capitalize">{text}</span>
			</button>
		);
	}

	return (
		<div className="flex flex-col items-center">
			{children}

			<span className="text-xs font-semibold capitalize">{text}</span>
		</div>
	);
}
