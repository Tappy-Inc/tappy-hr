import { type EuiThemeColorMode } from '@elastic/eui';
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ThemeContextInterface {
  theme: EuiThemeColorMode;
  setTheme: Dispatch<SetStateAction<EuiThemeColorMode>>;
}

const ThemeContext = createContext<ThemeContextInterface>({
  theme: 'light',
  setTheme: () => 'light',
});

const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<EuiThemeColorMode>('light');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');

    if (storedTheme) {
      setTheme(storedTheme as EuiThemeColorMode);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider'
    );
  }
  return context;
};

export { ThemeContextProvider, useThemeContext };
