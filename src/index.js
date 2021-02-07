import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import HttpBackend from 'i18next-http-backend';
import common_es from "./languages/es/common.json";
import common_en from "./languages/en/common.json";

const resources = {
    en: {common: common_en},
    'en-US': {common: common_en}, 
    es: {common: common_es},
    'es-ES': {common: common_es}, 
}

i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
        backend: {
            backends: [
                LocalStorageBackend,
                HttpBackend
            ],
            backendOptions: [{
                expirationTime: 7*24*60*60*1000,
                store: window.localStorage,
            }]
        },
        interpolation: { escapeValue: false },
        resources,
        ns: ['common'],
        defaultNS: 'common',
        fallbackLng: 'en',
        supportedLngs: ['en', 'en-US', 'es', 'es-ES'],
        debug: false,
});

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

registerServiceWorker();
