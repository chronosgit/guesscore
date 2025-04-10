import { Outlet } from 'react-router';
import Header from '@/components/layout/Header';

export default function DefaultLayoutWrapper() {
	return (
		<main className="mx-auto max-w-[75rem]">
			<Header />

			<Outlet />
		</main>
	);
}
