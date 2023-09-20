import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={'nav'}>
            <ul className={'nav__list'}>
                <NavLink className={'nav__list__item'} to={'/profile'}>Profiles</NavLink>
                <NavLink className={'nav__list__item'} to={'/dialogs'}>Messages</NavLink>
                <NavLink className={'nav__list__item'} to={'/news'}>News</NavLink>
                <NavLink className={'nav__list__item'} to={'/music'}>Music</NavLink>
                <NavLink className={'nav__list__item'} to={'/settings'}>Settings</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;