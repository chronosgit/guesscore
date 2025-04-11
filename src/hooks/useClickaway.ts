import { RefObject, useEffect } from 'react';

export default function useClickaway(
	ref: RefObject<HTMLElement | null>,
	onClickaway: Function,
) {
	const onDocumentClick = (e: Event) => {
		if (ref == null) return;

		const target = e.target as HTMLElement | null;

		if (!ref.current?.contains(target)) onClickaway();
	};

	useEffect(() => {
		document.addEventListener('click', onDocumentClick);

		return () => document.removeEventListener('click', onDocumentClick);
	}, []);

	return { onDocumentClick };
}
