import React from "react";
import BackgroundImage from "../../img/gregory-gomez-OqgeSOpM1UE-unsplash.jpg";

const Profile = () => {
    return (
        <div className={`content`}>
            <div className={'bg-wrapper'}>
                <img
                    src={BackgroundImage}
                    alt="profileBackgroundImage"/>
            </div>
            <div className={'info'}>
                <div>Avatar pic + info + My posts</div>
                <div>My posts</div>
                <div>Comments</div>
            </div>

        </div>
    )
}

export default Profile;