import React from "react";
import './DialogItem.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    userId: number,
    userName: string
}
const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    const {userId, userName} = props;

    return (
        <div className={`dialog`}>
            <NavLink to={`/dialogs/${userId}`}>{userName}</NavLink>
        </div>
    )
}

export default DialogItem;