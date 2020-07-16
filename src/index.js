import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import SplitCall from './Splits-Tags/SplitCall';
import { BrowserRouter } from 'react-router-dom';
import App from './Power-Toes/App'
import AppLang from './lang-context/AppLang';

ReactDOM.render(
<AppLang />,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
