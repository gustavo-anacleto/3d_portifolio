import { useTranslation } from 'react-i18next';
import './ToggleLanguage.css'
import { useState } from 'react';

export default function ToggleLanguage() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState('pt')

    const changeLanguage = () => {
        setLanguage(() => language === 'pt' ? 'en' : 'pt');
        i18n.changeLanguage(language === 'pt' ? 'en' : 'pt');
    };

    return (
        <div className="toggle-switch">
            <input type="checkbox" id="toggle" onChange={() => changeLanguage()} />
            <label htmlFor="toggle" className="toggle-label">
                <span className="toggle-image"></span>
            </label>
        </div>
    );
}