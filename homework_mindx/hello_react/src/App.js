import './App.css'
import Footer from './components/Footer/Footer.js';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header.js';
import { InfoProvider } from './InfoContext.js';
import { LanguageProvider } from './LanguageContext.js';

const App = () => {
    return (
        <>
            <LanguageProvider>
                <InfoProvider>
                    <Header />
                    <Form />
                    <Footer />
                </InfoProvider>
            </LanguageProvider>
        </>
    );
};

export default App;