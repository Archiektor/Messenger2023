import React from 'react';
import './Dialogs.css';
import UserItem from "./UserItem/UserItem";
import DialogItem from "./MessageItem/MessageItem";
import {
    DialogType,
    DispatchType, UserType
} from '../../redux/state';
import {addMessageActionCreator, readMessageActionCreator} from '../../redux/dialogsReducer';

type DialogsType = {
    state: {
        usersData: Array<UserType>
        dialogsData: Array<DialogType>
        newMessage: string
    }
    dispatch: DispatchType

}

const Dialogs: React.FC<DialogsType> = ({state, dispatch}) => {
    const {usersData: users, dialogsData: dialogs, newMessage} = state;

    const newPostElement = React.createRef<HTMLInputElement>();

    const addNewMessage = () => {
        dispatch(addMessageActionCreator());
    }

    const readValue = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            console.log(`text changed ${text}`)
            dispatch(readMessageActionCreator(text))
        }
    }

    return (
        <div className={`dialogs`}>
            <div className={`dialogs__users`}>
                {
                    users.map(({userId, userName}) =>
                        <UserItem key={userId} userId={userId} userName={userName}/>)
                }
            </div>
            <div className={`dialogs__messages`}>
                {
                    dialogs.map(({messageId, message}) =>
                        <DialogItem key={messageId} messageId={messageId} message={message}/>)
                }

                {/*<input onChange={() => readValue()} ref={newPostElement} className={`dialogs__input`}*/}
                <input ref={newPostElement} onChange={() => readValue()} className={`dialogs__input`}
                    // type="text" value={profilePage.newPostText}
                       type="text" value={newMessage}
                       placeholder={`your message`}/>
                <button onClick={() => addNewMessage()}
                        className={`dialogs__send-btn`}>Send
                </button>
            </div>
        </div>
    )
}

export default Dialogs;