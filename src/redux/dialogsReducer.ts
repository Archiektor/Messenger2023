import {ActionType, ADD_MESSAGE, CHANGE_MESSAGE_VALUE, DialogsPageType, MessageType,} from './state';

type DialogReducerType = (state: DialogsPageType, action: ActionType) => DialogsPageType
type addMessageActionCreatorType = () => ActionType
type readMessageActionCreatorType = (text: string) => ActionType

export const addMessageActionCreator: addMessageActionCreatorType = () => ({type: ADD_MESSAGE})
export const readMessageActionCreator: readMessageActionCreatorType = (text: string) => ({
    type: CHANGE_MESSAGE_VALUE,
    text
})

const initialState:DialogsPageType = {
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

const dialogReducer: DialogReducerType = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {
                messageId: state.dialogsData.length + 1,
                message: state.newMessage
            }
            state.dialogsData.push(newMessage);
            state.newMessage = ''
            return state;
        case CHANGE_MESSAGE_VALUE:
            if (action.text != null) {
                state.newMessage = action.text;
            }
            return state;
        default:
            return state;
    }
}

export default dialogReducer;

