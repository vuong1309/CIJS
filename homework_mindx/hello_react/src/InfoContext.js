import { useState, createContext } from "react";

const InfoContext = createContext();

function InfoProvider({ children }) {

    //useState for Login character of Header
    const [loginChar, setLoginChar] = useState('Login');

    //useState for input & submit form
    const [infoUserName, setInfoUserName] = useState('');

    //setState for username input value
    const nameValue = (e) => {
        setInfoUserName(e.target.value)
    };

    //handle submit: setState for username to empty string, get value to update setstate of Login character
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginChar(`Welcome, ${infoUserName}`);
        setInfoUserName("");
    }

    const InfoValue = {
        infoUserName,
        setInfoUserName,
        nameValue,
        handleSubmit,
        loginChar,
        setLoginChar
    };

    return (
        <InfoContext.Provider value={InfoValue}>
            {children}
        </InfoContext.Provider>
    )

}
export { InfoContext, InfoProvider };

