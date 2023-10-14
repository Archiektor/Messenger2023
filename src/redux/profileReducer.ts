import {ActionType, ADD_POST, CHANGE_POST_VALUE, PostType, ProfilePageType} from './state';

type ProfileReducerType = (state: ProfilePageType, action: ActionType) => ProfilePageType
type addPostActionCreatorType = () => ActionType
type readValueActionCreatorType = (text: string) => ActionType

export const addPostActionCreator: addPostActionCreatorType = () => ({type: ADD_POST})
export const readValueActionCreator: readValueActionCreatorType = (text: string) => ({type: CHANGE_POST_VALUE, text})

const initialState: ProfilePageType = {
        postsData: [
            {postId: 1, message: `Comment #1`, likesCount: 0},
            {postId: 2, message: `Comment #2`, likesCount: 3},
            {postId: 3, message: `Comment #3`, likesCount: 5},
            {postId: 4, message: `Comment #4`, likesCount: 7},
            {postId: 5, message: `Comment #5`, likesCount: 9},
        ],
        newPostText: '',
}

const profileReducer: ProfileReducerType = (state= initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                postId: state.postsData.length + 1,
                message: state.newPostText,
                likesCount: 0,
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_POST_VALUE:
            if (action.text != null) {
                state.newPostText = action.text;
            }
            return state;
        default:
            return state;
    }
}

export default profileReducer;
