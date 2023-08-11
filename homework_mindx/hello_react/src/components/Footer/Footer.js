import './Footer.css';
import { LanguageContext } from '../../LanguageContext.js';
import { useContext } from 'react';

const Footer = () => {

    const { language, setLanguage, SelectLanguage, LanguageData } = useContext(LanguageContext);

    return (
        <div className='my-footer'>
            <select value={language} onChange={SelectLanguage}>
                <option value="vi">vi</option>
                <option value="en">en</option>
            </select>
        </div>
    );
};

export default Footer;