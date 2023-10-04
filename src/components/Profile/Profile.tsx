import React from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from '../../redux/state';

type ProfileType = {
    state: Array<PostType>
}

const Profile: React.FC<ProfileType> = ({state}) => {

    return (
        <div className={`content`}>
            <ProfileInfo/>
            <MyPosts posts={state}/>
        </div>
    )
}

export default Profile;