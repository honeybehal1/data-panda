import { React, Provider } from '../src/utils/general-imports';
import thunk from "redux-thunk";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import translationsObject from './utils/global/translations'

import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store';
import 'material-design-icons/iconfont/material-icons.css'
const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, middlewareEnhancer, window.devToolsExtentions && window.devToolsExtentions());
syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('en-Us'));






ReactDOM.render(<Provider store={store} >
        <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
