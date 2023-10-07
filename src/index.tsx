import './index.css';
import {addPost, changePostValue, state, StateType, subscriber} from './redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changePostValue={changePostValue}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(state)
subscriber(rerenderEntireTree);

