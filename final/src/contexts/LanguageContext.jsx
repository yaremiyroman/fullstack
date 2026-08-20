import { createContext, useState, useContext } from 'react';
import en from '../i18n/en.json';
import uk from '../i18n/uk.json';

const LanguageContext = createContext();

const i18nMap = {
    en,
    uk,
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = (nextLanguage) => {
        if (i18nMap[nextLanguage]) {
            setLanguage(nextLanguage);
        }
    };

    const t = (key) => {
        return i18nMap[language]?.[key] ?? key;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};
