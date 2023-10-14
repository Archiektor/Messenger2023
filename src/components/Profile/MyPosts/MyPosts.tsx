import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";
import {PostType} from '../../../redux/state';

type MyPostsType = {
    posts: PostType[],
    newPostText: string
    addNewPost: () => void
    readValue: (text: string) => void
}

const MyPosts: React.FC<MyPostsType> = ({posts, newPostText, addNewPost, readValue}) => {

    const newPostElement = React.createRef<HTMLInputElement>();

    const addNewPostOnClick = () => {
        //dispatch(addPostActionCreator());
        addNewPost()
    }

    const readPostValue = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            //dispatch(readValueActionCreator(text))
            readValue(text)
        }
    }

    return (
        <div className={'posts-wrapper'}>
            <div className={'posts'}>
                <div className={`new-post`}>
                    <h3 className={`new-post__title`}>My posts</h3>
                    <input onChange={() => readPostValue()} ref={newPostElement} className={`new-post__write-text`}
                           type="text" value={newPostText}
                           placeholder={`your news`}/>
                    <button onClick={() => addNewPostOnClick()}
                            className={`new-post__send-btn`}>Send
                    </button>
                </div>
            </div>
            <div className={'comments'}>
                {
                    posts.map(({postId, message, likesCount}) =>
                        <Post key={postId} postId={postId} message={message} likesCount={likesCount}/>
                    )
                }
            </div>
        </div>
    )
}

export default MyPosts;