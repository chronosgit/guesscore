import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from '@/pages/HomePage';
import DefaultLayoutWrapper from '@/components/layout/DefaultLayoutWrapper';
import { ThemeContextProvider } from '@/contexts/ThemeContext';

export default function App() {
	return (
		<ThemeContextProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<DefaultLayoutWrapper />}>
						<Route path="/" element={<HomePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeContextProvider>
	);
}
