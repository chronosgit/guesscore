import { createContext, ReactNode } from 'react';
import useTheme from '@/hooks/useTheme';
import { ThemeType } from '@/interfaces/ThemeType';

type ThemeContextType = {
	switchTheme: (newTheme: ThemeType) => void;
	toggleTheme: () => void;
};

interface ProviderProps {
	children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider = ({ children }: ProviderProps) => {
	const { switchTheme, toggleTheme } = useTheme();

	return (
		<ThemeContext.Provider value={{ switchTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContextProvider };
export default ThemeContext;
