import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';
import {StateType} from './redux/state';
import store from './redux/redux-store';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(() =>{
    rerenderEntireTree(store.getState())
});

