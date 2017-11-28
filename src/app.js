import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';
import initalStore from './store/configure_store';

const store = initalStore()

const Template = () => (
    <div>
        <h1>Hello</h1>
    </div>
)

ReactDOM.render(
    <Provider store = {store}>
        <Template />
    </Provider>,
     document.getElementById("app"));