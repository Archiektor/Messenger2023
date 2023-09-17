import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className={'nav'}>
            <ul className={'nav__list'}>
                <a className={'nav__list__item'} href={'#'}>Profiles</a>
                <a className={'nav__list__item'} href={'#'}>Messages</a>
                <a className={'nav__list__item'} href={'#'}>News</a>
                <a className={'nav__list__item'} href={'#'}>Music</a>
                <a className={'nav__list__item'} href={'#'}>Settings</a>
            </ul>
        </nav>
    )
}

export default Navbar;