import React from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from '../../redux/state';

type ProfileType = {
    state: {
        postsData: Array<PostType>,
        newPostText: string
    }
    addPost: () => void
    changePostValue: (symbol: string) => void
}

const Profile: React.FC<ProfileType> = ({state, addPost, changePostValue}) => {

    return (
        <div className={`content`}>
            <ProfileInfo/>
            <MyPosts profilePage={state} addPost={addPost} changePostValue={changePostValue}/>
        </div>
    )
}

export default Profile;