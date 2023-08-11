import { useState, createContext } from "react";

const LanguageContext = createContext();


function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("vi");

    const LanguageData = {
        vi: {
            formHeader: "Đăng nhập",
            formButton: "Đăng nhập"
        },
        en: {
            formHeader: "Login",
            formButton: "Login"
        },
    };

    const SelectLanguage = (e) => {
        setLanguage(e.target.value);
    }

    const LanguageValue = { language, setLanguage, SelectLanguage, LanguageData };

    return (
        <LanguageContext.Provider value={LanguageValue}>
            {children}
        </LanguageContext.Provider>
    )
}

export { LanguageContext, LanguageProvider };