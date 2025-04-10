import { Outlet } from 'react-router';
import Header from '@/components/layout/Header';
import MobileBottomMenu from '@/components/layout/MobileBottomMenu';

export default function DefaultLayoutWrapper() {
	return (
		<main className="mx-auto max-w-[75rem]">
			<Header />

			<Outlet />

			<MobileBottomMenu />
		</main>
	);
}
