import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header className={'header'}>
            <img className={'header__img'}
                 src='https://cdn.icon-icons.com/icons2/2853/PNG/512/chat_message_conversation_bubble_icon_181523.png'
                 alt="logoOfChat"/>
        </header>
    )
}

export default Header;