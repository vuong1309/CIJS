import './Form.css';
import { useContext } from 'react';
import { InfoContext } from '../../InfoContext.js';
import { LanguageContext } from '../../LanguageContext.js';

const Form = () => {

    const InfoValue = useContext(InfoContext);
    const { language, setLanguage, SelectLanguage, LanguageData } = useContext(LanguageContext);

    return (
        <form className='my-form' onSubmit={InfoValue.handleSubmit}>
            <div className='my-form-header'>{LanguageData[language].formHeader}</div>
            <input
                className='my-form-input'
                placeholder='Username ...'
                value={InfoValue.infoUserName}
                onChange={InfoValue.nameValue}>
            </input>
            {console.log(InfoValue.infoUserName)}
            <button onClick={InfoValue.handleSubmit} className='my-form-button'>{LanguageData[language].formButton}</button>
        </form>
    );
};

export default Form;