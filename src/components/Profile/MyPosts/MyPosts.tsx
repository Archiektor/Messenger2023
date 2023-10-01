import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";

type PostsType = {
    postId: number,
    message: string,
    likesCount: number
}

const MyPosts = () => {
    const postsData: Array<PostsType> = [
        {postId: 1, message: `Comment #1`, likesCount: 0},
        {postId: 2, message: `Comment #2`, likesCount: 3},
        {postId: 3, message: `Comment #3`, likesCount: 5},
        {postId: 4, message: `Comment #4`, likesCount: 7},
        {postId: 5, message: `Comment #5`, likesCount: 9},
    ]

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
                    postsData.map(({postId, message, likesCount}) =>
                        <Post key={postId} postId={postId} message={message} likesCount={likesCount}/>
                    )
                }
            </div>
        </div>
    )
}

export default MyPosts;