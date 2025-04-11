import { lazy, useContext } from 'react';
import { Outlet } from 'react-router';
import GlobalLayoutContext from '@/contexts/GlobalLayoutContext';
import Header from '@/components/layout/header';
import MobileBottomMenu from '@/components/layout/mobile_bottom_menu';

const MobileSidebar = lazy(() => import('@/components/layout/mobile_sidebar'));

export default function DefaultLayoutWrapper() {
	const globalLayoutCtx = useContext(GlobalLayoutContext);

	return (
		<>
			<Header />

			<main className="mx-auto max-w-[75rem]">
				<Outlet />
			</main>

			{globalLayoutCtx?.isMobileSidebar && <MobileSidebar />}

			<MobileBottomMenu />
		</>
	);
}
