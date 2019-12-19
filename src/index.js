import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LocaleContextProvider from "./context/LocaleContext";
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from "react-intl";
import { en, ko } from "./locales";
import {LocaleContext} from "./context/LocaleContext";
import util from './util';

const WrapApp = props =>{
    const messages = { ko: ko, en: en };
    const { localeContext } = useContext(LocaleContext);
    const language = util.getLanguage(localeContext);
    console.log(language);

    return (
            <IntlProvider locale={language} messages={messages[language]}>
                <App />
            </IntlProvider>
    );
};

ReactDOM.render(
    <LocaleContextProvider>
        <WrapApp/>
    </LocaleContextProvider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
