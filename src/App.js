import React, {useContext} from 'react';
import {LocaleContext} from "./context/LocaleContext";
import logo from './logo.svg';
import './App.css';
import { useIntl , FormattedHTMLMessage} from "react-intl";
const App = () => {
  const intl = useIntl();
  console.log( intl );
  const {dispatchLocale} = useContext(LocaleContext);
  const changeLocale = (locale)=>{
    dispatchLocale({type: 'language', target:locale});
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormattedHTMLMessage
          id={"reactTitle"}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {intl.formatMessage({ id: "learnReact" })}
        </a>
        <div style={{display:"flex", marginTop:"30px"}}>
          <button style={{width:"100px", height:"50px", fontSize:"15px"}} onClick={()=>{changeLocale('ko')}}>
            {intl.formatMessage({ id: "korean" })}
          </button>
          <button style={{width:"100px", height:"50px", fontSize:"15px"}} onClick={()=>{changeLocale('en')}}>
            {intl.formatMessage({ id: "english" })}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
