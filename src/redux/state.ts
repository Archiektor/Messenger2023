import profileReducer from './profileReducer';
import dialogReducer from './dialogsReducer';

export const ADD_POST = 'ADD-POST';
export const ADD_MESSAGE = 'ADD-MESSAGE';
export const CHANGE_POST_VALUE = 'CHANGE-POST-VALUE';
export const CHANGE_MESSAGE_VALUE = "CHANGE-MESSAGE-VALUE"


export type PostType = {
    postId: number,
    message: string,
    likesCount: number
}

export type MessageType = {
    messageId: number
    message: string
}

export type UserType = {
    userId: number,
    userName: string
}

export type DialogType = {
    messageId: number,
    message: string
}

export type ProfilePageType = {
    postsData: PostType[],
    newPostText: string
}

export type DialogsPageType = {
    usersData: UserType[]
    dialogsData: DialogType[]
    newMessage: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

type RerenderEntireTree = (state: StateType) => void
type SubscriberType = (observer: (state: StateType) => void) => void
type GetStateType = () => StateType
export type DispatchType = (action: ActionType) => void

type StoreType = {
    _state: StateType
    _callSubscriber: RerenderEntireTree
    subscriber: SubscriberType
    getState: GetStateType
    dispatch: DispatchType

}

export type ActionType = {
    type: 'ADD-POST' | 'CHANGE-POST-VALUE' | 'ADD-MESSAGE' | "CHANGE-MESSAGE-VALUE"
    text?: string
}

export const store: StoreType = {
    _state: {
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
            ],
            newMessage: ''
        }
    },
    _callSubscriber(state: StateType) {
        console.log('State changed')
    },

    subscriber(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action: ActionType) {
        this.getState()['profilePage'] = profileReducer(this.getState()['profilePage'], action);
        this.getState()['dialogsPage'] = dialogReducer(this.getState()['dialogsPage'], action);
        this._callSubscriber(this.getState());
    }
}