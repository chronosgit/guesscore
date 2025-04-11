import { useEffect, useRef } from 'react';
import useClickaway from '@/hooks/useClickaway';
import useToggle from '@/hooks/useToggle';
import Links from '@/components/layout/header/menu_modal/Links';
import ThemeButton from '@/components/layout/header/menu_modal/ThemeButton';

interface Props {
	closeModal: Function;
}

export default function MenuModal({ closeModal }: Props) {
	const menuModalRef = useRef(null);

	const { value: isMounted, changeValue: changeMounted } = useToggle();

	useClickaway(menuModalRef, () => {
		changeMounted(false);

		setTimeout(closeModal, 200);
	});

	useEffect(() => {
		changeMounted(true);
	}, []);

	return (
		<div
			ref={menuModalRef}
			className={`bg-background-300 absolute top-0 right-0 overflow-hidden rounded-sm p-2 transition-all ${isMounted ? 'max-h-42 translate-y-10 opacity-100' : 'max-h-0 translate-y-14 opacity-0'}`}
		>
			<ul className="space-y-2">
				<li>
					<ThemeButton />
				</li>

				<Links />
			</ul>
		</div>
	);
}
