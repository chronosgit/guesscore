import { Outlet } from 'react-router';

export default function DefaultLayoutWrapper() {
	return (
		<main className="mx-auto max-w-[75rem]">
			<Outlet />
		</main>
	);
}
