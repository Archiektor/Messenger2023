import React from 'react';
import BackgroundImage from './img/birmingham-museums-trust-1HXd0iEFUDc-unsplash.jpg';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className={'header'}>
                <img
                    src='https://cdn.icon-icons.com/icons2/2853/PNG/512/chat_message_conversation_bubble_icon_181523.png'
                    alt="logoOfChat"/>
            </header>
            <nav className={'nav'}>
                <ul>
                    <a href={'#'}>Profiles</a>
                    <a href={'#'}>Messages</a>
                    <a href={'#'}>News</a>
                    <a href={'#'}>Music</a>
                    <a href={'#'}>Settings</a>
                </ul>
            </nav>
            <div className={`content`}>
                <div className={'bg-wrapper'}>
                    <img
                        src={BackgroundImage}
                        alt="profileBackgroundImage"/>
                </div>
                <div className={'info'}>
                    Avatar pic + info + My posts
                </div>

            </div>

        </div>
    );
}

export default App;
