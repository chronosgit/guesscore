import { MouseEvent, PropsWithChildren } from 'react';
import { Link } from 'react-router';

interface Props {
	text: string;
	to?: string;
	linkTarget?: '_blank' | '_self' | '_parent' | '_top' | string;
	isLink?: boolean;
	isButton?: boolean;
	onClick?: (e: MouseEvent) => unknown;
}

export default function MenuElement({
	text,
	to,
	linkTarget,
	isLink,
	isButton,
	onClick,
	children,
}: PropsWithChildren<Props>) {
	if (isLink) {
		return (
			<Link
				to={to ?? ''}
				target={linkTarget}
				className="action-color-rise flex flex-col items-center"
			>
				{children}

				<span className="text-xs font-semibold capitalize">{text}</span>
			</Link>
		);
	}

	if (isButton) {
		const onBtnClick = (e: MouseEvent) => {
			if (typeof onClick !== 'function') return;

			onClick(e);
		};

		return (
			<button
				type="button"
				className="action-color-rise flex flex-col items-center"
				onClick={onBtnClick}
			>
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
