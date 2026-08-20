import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const initTheme = localStorage.getItem('theme') ?? 'day';
    const [theme, setTheme] = useState(initTheme);

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === 'day' ? 'night' : 'day';
            localStorage.setItem('theme', newTheme);

            return newTheme;
        });
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
}
