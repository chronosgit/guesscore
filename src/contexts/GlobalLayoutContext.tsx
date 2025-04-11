import useToggle from '@/hooks/useToggle';
import { createContext, ReactNode } from 'react';

interface GlobalLayoutContext {
	isSidebar: boolean;
	isMobileSidebar: boolean;
	changeSidebar: (newValue: boolean) => unknown;
	toggleSidebar: Function;
	changeMobileSidebar: (newValue: boolean) => unknown;
	toggleMobileSidebar: Function;
}

interface GlobalLayoutContextProviderProps {
	children: ReactNode;
}

const GlobalLayoutContext = createContext<GlobalLayoutContext | undefined>(
	undefined,
);

const GlobalLayoutContextProvider = ({
	children,
}: GlobalLayoutContextProviderProps) => {
	const {
		value: isSidebar,
		changeValue: changeSidebar,
		toggleValue: toggleSidebar,
	} = useToggle();

	const {
		value: isMobileSidebar,
		changeValue: changeMobileSidebar,
		toggleValue: toggleMobileSidebar,
	} = useToggle();

	return (
		<GlobalLayoutContext.Provider
			value={{
				isSidebar,
				isMobileSidebar,
				changeSidebar,
				toggleSidebar,
				changeMobileSidebar,
				toggleMobileSidebar,
			}}
		>
			{children}
		</GlobalLayoutContext.Provider>
	);
};

export { GlobalLayoutContext, GlobalLayoutContextProvider };
export default GlobalLayoutContext;
