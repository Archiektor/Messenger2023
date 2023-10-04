import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";
import {PostType} from '../../../redux/state';

type MyPostsType = {
    posts: Array<PostType>
}

const MyPosts: React.FC<MyPostsType> = ({posts}) => {

    return (
        <div className={'posts-wrapper'}>
            <div className={'posts'}>
                <div className={`new-post`}>
                    <h3 className={`new-post__title`}>My posts</h3>
                    <input className={`new-post__write-text`} type="text" placeholder={`your news`}/>
                    <button className={`new-post__send-btn`}>Send</button>
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