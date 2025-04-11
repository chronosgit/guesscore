import { PropsWithChildren } from 'react';
import ArrowsDownLine from '@/components/ui/icons/ArrowsDownLine';
import useToggle from '@/hooks/useToggle';

interface Props extends PropsWithChildren {
	featureName: string;
}

export default function FeatureDropdown({ featureName, children }: Props) {
	const { value: isDropdown, toggleValue: toggleDropdown } = useToggle();

	return (
		<div className="bg-background-300 relative rounded-md px-3 py-1.5">
			<button
				type="button"
				className="flex w-full items-center justify-between"
				onClick={toggleDropdown}
			>
				<span className="font-medium">{featureName}</span>

				<ArrowsDownLine
					className={`max-w-5 transition-transform ${isDropdown ? 'rotate-180' : ''}`}
				/>
			</button>

			<div
				className={`overflow-hidden transition-all ${isDropdown ? 'max-h-40 pt-2 opacity-100' : 'max-h-0 pt-0 opacity-0'}`}
			>
				{children}
			</div>
		</div>
	);
}
