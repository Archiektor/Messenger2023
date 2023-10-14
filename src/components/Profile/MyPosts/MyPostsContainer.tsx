import React from "react";
import './MyPosts.css';
import {ActionType, DialogsPageType, ProfilePageType} from '../../../redux/state';
import {addPostActionCreator, readValueActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {EmptyObject, Store} from 'redux';

type MyPostsContainerType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType, dialogsPage: DialogsPageType }, ActionType>
}

const MyPostsContainer: React.FC<MyPostsContainerType> = ({store}) => {
    const addNewPost = () => {
        store.dispatch(addPostActionCreator());
    }

    const readValue = (text: string) => {
        store.dispatch(readValueActionCreator(text))
    }

    return (<MyPosts addNewPost={addNewPost} readValue={readValue} posts={store.getState().profilePage.postsData}
                     newPostText={store.getState().profilePage.newPostText}/>)
}

export default MyPostsContainer;