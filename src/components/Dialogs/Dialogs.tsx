import React from 'react';
import './Dialogs.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    userId: number,
    userName: string
}
type MessageItemPropsType = {
    message: string
}
const DialogItem = (props: DialogItemPropsType) => {
    const {userId, userName} = props;

    return (
        <div className={`dialog`}>
            <NavLink to={`/dialogs/${userId}`}>{userName}</NavLink>
        </div>
    )
}

const MessageItem = (props: MessageItemPropsType) => {
    const {message} = props;

    return (
        <div className={`message`}>
            {message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={`dialogs`}>
            <div className={`dialogs__items`}>
                <DialogItem userId={1} userName={`Dimych`}/>
                <DialogItem userId={2} userName={`Sveta`}/>
                <DialogItem userId={3} userName={`Viktor`}/>
                <DialogItem userId={4} userName={`Valera`}/>
                <DialogItem userId={5} userName={`Vlad`}/>
            </div>
            <div className={`dialogs__messages`}>
                <MessageItem message={'Bla-bla'}/>
                <MessageItem message={'La-La-Land'}/>
                <MessageItem message={'Nightwish'}/>
            </div>
        </div>
    )
}

export default Dialogs;