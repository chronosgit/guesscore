import { Outlet } from 'react-router';
import Header from '@/components/layout/header';
import MobileBottomMenu from '@/components/layout/mobile_bottom_menu';

export default function DefaultLayoutWrapper() {
	return (
		<main className="mx-auto max-w-[75rem]">
			<Header />

			<Outlet />

			<MobileBottomMenu />
		</main>
	);
}
