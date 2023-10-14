import React from 'react';
import './Dialogs.css';
import UserItem from "./UserItem/UserItem";
import DialogItem from "./MessageItem/MessageItem";
import {DialogType, UserType} from '../../redux/state';


type DialogsType = {
    newMessage: string
    dialogsData: DialogType[]
    usersData: UserType[]
    addNewMessage: () => void
    readValue: (text: string) => void
}

const Dialogs: React.FC<DialogsType> = ({newMessage, dialogsData, usersData, addNewMessage, readValue}) => {

    const newPostElement = React.createRef<HTMLInputElement>();

    const addNewMessageOnClick = () => {
        addNewMessage()
    }

    const readMessageValue = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            readValue(text);
        }
    }

    return (
        <div className={`dialogs`}>
            <div className={`dialogs__users`}>
                {
                    usersData.map(({userId, userName}) =>
                        <UserItem key={userId} userId={userId} userName={userName}/>)
                }
            </div>
            <div className={`dialogs__messages`}>
                {
                    dialogsData.map(({messageId, message}) =>
                        <DialogItem key={messageId} messageId={messageId} message={message}/>)
                }

                <input ref={newPostElement} onChange={() => readMessageValue()} className={`dialogs__input`}
                       type="text" value={newMessage}
                       placeholder={`your message`}/>
                <button onClick={() => addNewMessageOnClick()}
                        className={`dialogs__send-btn`}>Send
                </button>
            </div>
        </div>
    )
}

export default Dialogs;