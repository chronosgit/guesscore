import { ReactNode } from 'react';

interface Props {
	className?: string;
	children: ReactNode;
}

export default function ({ className, children }: Props) {
	return (
		<div
			className={`hover:bg-background-300 rounded-md px-2 py-1 transition-colors ${className}`}
		>
			{children}
		</div>
	);
}
