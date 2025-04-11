import { useState, useEffect } from 'react';

export default function useScreenBreakpoints() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const isScreen2XS = windowWidth >= 360;
	const isScreenXS = windowWidth >= 480;
	const isScreenSM = windowWidth >= 640;
	const isScreenMD = windowWidth >= 768;
	const isScreenLG = windowWidth >= 1024;
	const isScreenXL = windowWidth >= 1280;
	const isScreen2XL = windowWidth >= 1536;

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		isScreen2XS,
		isScreenXS,
		isScreenSM,
		isScreenMD,
		isScreenLG,
		isScreenXL,
		isScreen2XL,
	};
}
