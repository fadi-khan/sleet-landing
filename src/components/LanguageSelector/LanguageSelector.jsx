import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../store/slices/languageSlice';

const languages = {
    en: {
        value: 'en',
        label: 'English',
        flag: (
            <svg viewBox="0 0 24 16" width="18" height="13" aria-hidden="true">
                <rect width="24" height="16" fill="#012169" />
                <path d="M0 0 24 16M24 0 0 16" stroke="#fff" strokeWidth="3.2" />
                <path d="M0 0 24 16M24 0 0 16" stroke="#C8102E" strokeWidth="1.4" />
                <path d="M12 0V16M0 8H24" stroke="#fff" strokeWidth="5.4" />
                <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="3.2" />
            </svg>
        )
    },
    ar: {
        value: 'ar',
        label: 'العربية',
        flag: (
            <svg viewBox="0 0 24 16" width="18" height="13" aria-hidden="true">
                <rect width="24" height="16" fill="#006C35" />
                <text x="12" y="8.6" textAnchor="middle" fontSize="4.6" fill="#fff" fontFamily="'Traditional Arabic','Arial',sans-serif">لا إله إلا الله</text>
                <rect x="4" y="11.4" width="15" height="1.3" fill="#fff" />
                <polygon points="3.2,10.9 4.4,12.05 3.2,13.2" fill="#fff" />
            </svg>
        )
    }
};

const LanguageSelector = () => {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);
    const current = languages[language] || languages.en;

    const handleToggle = () => {
        dispatch(setLanguage(current.value === 'en' ? 'ar' : 'en'));
    };

    return (
        <button type="button" className="lang-toggle fs-5 px-4" onClick={handleToggle} aria-label="Toggle language">
            <span className="lang-toggle-flag ">{current.flag}</span>
            <span className="lang-toggle-label">{current.label}</span>
        </button>
    );
};

export default LanguageSelector;
