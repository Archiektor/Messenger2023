let rerenderEntireTree = (state: StateType) => {
    console.log('State changed')
}

export type PostType = {
    postId: number,
    message: string,
    likesCount: number
}

export type UserType = {
    userId: number,
    userName: string
}

export type DialogType = {
    messageId: number,
    message: string
}

export type StateType = {
    profilePage: {
        postsData: Array<PostType>,
        newPostText: string
    }
    dialogsPage: {
        usersData: Array<UserType>
        dialogsData: Array<DialogType>
    }
}

export const state: StateType = {
    profilePage: {
        postsData: [
            {postId: 1, message: `Comment #1`, likesCount: 0},
            {postId: 2, message: `Comment #2`, likesCount: 3},
            {postId: 3, message: `Comment #3`, likesCount: 5},
            {postId: 4, message: `Comment #4`, likesCount: 7},
            {postId: 5, message: `Comment #5`, likesCount: 9},
        ],
        newPostText: '',
    },
    dialogsPage: {
        usersData: [
            {userId: 1, userName: 'Dimych'},
            {userId: 2, userName: 'Sveta'},
            {userId: 3, userName: 'Viktor'},
            {userId: 4, userName: 'Valera'},
            {userId: 5, userName: 'Vlad'},
        ],
        dialogsData: [
            {messageId: 1, message: 'Bla-bla'},
            {messageId: 2, message: 'La-La-Land'},
            {messageId: 3, message: 'Nightwish'},
        ]
    }
}

export const addPost = () => {
    let newPost: PostType = {
        postId: state['profilePage']['postsData'].length + 1,
        message: state['profilePage']['newPostText'],
        likesCount: 0,
    }
    state['profilePage']['postsData'].push(newPost);
    state['profilePage']['newPostText'] = '';
    //debugger;
    // @ts-ignore
    rerenderEntireTree(state);
}

export const changePostValue = (text: string) => {
    state['profilePage']['newPostText'] = text;
    //debugger;
    //console.log(state['profilePage']['newPostText'])
    // @ts-ignore
    rerenderEntireTree(state);
}

export const subscriber = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer;
}