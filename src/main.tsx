import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from '@/pages/HomePage';
import DefaultLayoutWrapper from '@/components/layout/DefaultLayoutWrapper';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayoutWrapper />}>
					<Route path="/" element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
