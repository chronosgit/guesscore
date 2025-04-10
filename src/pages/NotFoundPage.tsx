import { Link } from 'react-router';

export default function NotFoundPage() {
	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
			<h1 className="mb-4 text-6xl font-bold">404</h1>

			<p className="mb-2">Such page doesn't exist</p>

			<Link
				to="/"
				className="rounded-md bg-teal-400 px-2 py-1 hover:brightness-90"
			>
				Go home
			</Link>
		</div>
	);
}
