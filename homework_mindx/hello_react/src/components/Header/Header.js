import './Header.css';
import { useContext } from 'react';
import { InfoContext } from '../../InfoContext.js';

const Header = () => {

    const InfoValue = useContext(InfoContext);

    return (
        <div className='my-header'>
            <div>MindX</div>
            <div>{InfoValue.loginChar}</div>
        </div>
    );
};

export default Header; 