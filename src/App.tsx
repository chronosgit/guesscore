import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import { ThemeContextProvider } from '@/contexts/ThemeContext';
import DefaultLayoutWrapper from '@/components/layout/DefaultLayoutWrapper';

export default function App() {
	return (
		<ThemeContextProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<DefaultLayoutWrapper />}>
						<Route path="/" element={<HomePage />} />
					</Route>

					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</ThemeContextProvider>
	);
}
