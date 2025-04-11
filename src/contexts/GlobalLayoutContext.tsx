import { createContext, ReactNode } from 'react';
import useToggle from '@/hooks/useToggle';

interface GlobalLayoutContext {
	isMobileSidebar: boolean;
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
		value: isMobileSidebar,
		changeValue: changeMobileSidebar,
		toggleValue: toggleMobileSidebar,
	} = useToggle();

	return (
		<GlobalLayoutContext.Provider
			value={{
				isMobileSidebar,
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
