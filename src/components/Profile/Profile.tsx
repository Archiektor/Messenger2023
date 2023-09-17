import React from "react";
import './Profile.css';
import BackgroundImage from "../../img/gregory-gomez-OqgeSOpM1UE-unsplash.jpg";

const Profile = () => {
    return (
        <div className={`content`}>
            <div className={'bg-wrapper'}>
                <img className={'bg-wrapper__img'}
                     src={BackgroundImage}
                     alt="profileBackgroundImage"/>
            </div>
            <div className={'info'}>
                <div className={'info__avatar'}>Avatar pic + info + My posts</div>
                <div className={'info__posts'}>My posts</div>
                <div className={'info__comments'}>Comments</div>
            </div>

        </div>
    )
}

export default Profile;