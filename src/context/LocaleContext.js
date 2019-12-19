import React, { useReducer} from "react";

const initialState = {
  language: localStorage.getItem('lang') !== 'undefined' ?
      localStorage.getItem('lang') : 'ko'
};

const reducer = (state, action) => {
    // console.log("state", state);
    // console.log("action", action);
    switch(action.type){
        case 'language':
            localStorage.setItem('lang', action.target);
            return {...state, language: action.target};
        default:
            return state;
    }
};

const LocaleContext = React.createContext();
const LocaleContextConsumer = LocaleContext.Consumer;
const LocaleContextProvider = props =>{
    const [localeContext, dispatchLocale] = useReducer(reducer, initialState);
    const value = {localeContext, dispatchLocale};
    return (
        <LocaleContext.Provider value={value}>{props.children}</LocaleContext.Provider>
    );
};
export default LocaleContextProvider;
export {LocaleContext, LocaleContextConsumer}