import React from 'react';
import './Dialogs.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

type usersType = {
    userId: number,
    userName: string
}

type messagesType = {
    messageId: number,
    message: string
}

const Dialogs = () => {
    const usersData: Array<usersType> = [
        {userId: 1, userName: 'Dimych'},
        {userId: 2, userName: 'Sveta'},
        {userId: 3, userName: 'Viktor'},
        {userId: 4, userName: 'Valera'},
        {userId: 5, userName: 'Vlad'},
    ]

    const messagesData: Array<messagesType> = [
        {messageId: 1, message: 'Bla-bla'},
        {messageId: 2, message: 'La-La-Land'},
        {messageId: 3, message: 'Nightwish'},
    ]

    return (
        <div className={`dialogs`}>
            <div className={`dialogs__items`}>
                {
                    usersData.map(({userId, userName}) =>
                        <DialogItem key={userId} userId={userId} userName={userName}/>)
                }
            </div>
            <div className={`dialogs__messages`}>
                {
                    messagesData.map(({messageId, message}) =>
                        <MessageItem key={messageId} messageId={messageId} message={message}/>)
                }
            </div>
        </div>
    )
}

export default Dialogs;