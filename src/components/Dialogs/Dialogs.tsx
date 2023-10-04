import React from 'react';
import './Dialogs.css';
import UserItem from "./UserItem/UserItem";
import DialogItem from "./MessageItem/MessageItem";
import {DialogType, UserType} from '../../redux/state';

type DialogsType = {
    state: {
        usersData: Array<UserType>
        dialogsData: Array<DialogType>
    }

}

const Dialogs: React.FC<DialogsType> = ({state}) => {
    const {usersData: users, dialogsData: dialogs} = state;

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
            </div>
        </div>
    )
}

export default Dialogs;