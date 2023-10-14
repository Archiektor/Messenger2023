import React from "react";
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, DialogsPageType, ProfilePageType} from '../../redux/state';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {EmptyObject, Store} from 'redux';

type ProfileType = {
    store: Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType}, ActionType>
}

const Profile: React.FC<ProfileType> = ({store}) => {

    return (
        <div className={`content`}>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    )
}

export default Profile;