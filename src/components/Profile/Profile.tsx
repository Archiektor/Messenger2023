import React from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DispatchType, PostType} from '../../redux/state';

type ProfileType = {
    state: {
        postsData: Array<PostType>,
        newPostText: string
    }
    dispatch: DispatchType
}

const Profile: React.FC<ProfileType> = ({state, dispatch}) => {

    return (
        <div className={`content`}>
            <ProfileInfo/>
            <MyPosts profilePage={state} dispatch={dispatch}/>
        </div>
    )
}

export default Profile;