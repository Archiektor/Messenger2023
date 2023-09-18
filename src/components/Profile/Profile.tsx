import React from "react";
import './Profile.css';
import BackgroundImage from "../../img/gregory-gomez-OqgeSOpM1UE-unsplash.jpg";
import LichKing from "../../img/tlk.webp";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./Post/Post";

const Profile = () => {
    return (
        <div className={`content`}>
            <div className={'bg-wrapper'}>
                <img className={'bg-wrapper__img'}
                     src={BackgroundImage}
                     alt="profileBackgroundImage"/>
            </div>
            <div className={'content__info'}>
                <div className={'person'}>
                    <div className={'person__logo-wrapper'}>
                        <img className={'person__logo'} src={LichKing} alt="personLogo"/>
                    </div>
                    <div className={'person__data'}>
                        <ul className={'data-wrapper'}>
                            <li className={'data-wrapper__name'}>Nikki Odd</li>
                            <li className={'data-wrapper__dateBirth'}>22.12.1991</li>
                            <li className={'data-wrapper__city'}>Szczecin</li>
                            <li className={'data-wrapper__education'}>BNTU</li>
                            <li className={'data-wrapper__website'}>www.szcz.com</li>
                        </ul>
                    </div>
                </div>
                <MyPosts/>
                <div className={'comments'}>
                    <Post message={`Comment #1`}/>
                    <Post message={`Comment #2`}/>
                    <Post message={`Comment #3`}/>
                    <Post message={`Comment #4`}/>
                    <Post message={`Comment #5`}/>
                </div>

            </div>
        </div>
    )
}

export default Profile;