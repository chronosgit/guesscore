import { createContext, ReactNode } from 'react';
import useTheme from '@/hooks/useTheme';
import { ThemeType } from '@/interfaces/ThemeType';

type ThemeContextType = {
	theme: ThemeType;
	switchTheme: (newTheme: ThemeType) => void;
	toggleTheme: () => void;
};

interface ProviderProps {
	children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider = ({ children }: ProviderProps) => {
	const { theme, switchTheme, toggleTheme } = useTheme();

	return (
		<ThemeContext.Provider value={{ theme, switchTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContextProvider };
export default ThemeContext;
