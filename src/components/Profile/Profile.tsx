import React from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from '../../redux/state';

type ProfileType = {
    state: Array<PostType>
    addPost: (postMessage: string) => void
}

const Profile: React.FC<ProfileType> = ({state, addPost}) => {

    return (
        <div className={`content`}>
            <ProfileInfo/>
            <MyPosts posts={state} addPost={addPost}/>
        </div>
    )
}

export default Profile;