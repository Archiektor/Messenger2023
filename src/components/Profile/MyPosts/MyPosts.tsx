import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";
import {PostType} from '../../../redux/state';

type MyPostsType = {
    profilePage: {
        postsData: Array<PostType>,
        newPostText: string
    }
    addPost: () => void
    changePostValue: (symbol: string) => void
}

const MyPosts: React.FC<MyPostsType> = ({profilePage, addPost, changePostValue}) => {

    const newPostElement = React.createRef<HTMLInputElement>();

    const addNewPost = () => {
        addPost();
        // if (newPostElement.current) {
        //     changePostValue('');
        // }
    }

    const readValue = () => {
        if (newPostElement.current) {
            changePostValue(newPostElement.current.value);
        }
    }

    return (
        <div className={'posts-wrapper'}>
            <div className={'posts'}>
                <div className={`new-post`}>
                    <h3 className={`new-post__title`}>My posts</h3>
                    <input onChange={() => readValue()} ref={newPostElement} className={`new-post__write-text`}
                           type="text" value={profilePage.newPostText}
                           placeholder={`your news`}/>
                    <button onClick={() => addNewPost()}
                            className={`new-post__send-btn`}>Send
                    </button>
                </div>
            </div>
            <div className={'comments'}>
                {
                    profilePage.postsData.map(({postId, message, likesCount}) =>
                        <Post key={postId} postId={postId} message={message} likesCount={likesCount}/>
                    )
                }
            </div>
        </div>
    )
}

export default MyPosts;