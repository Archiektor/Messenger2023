import React from "react";
import './UserItem.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    userId: number,
    userName: string
}
const UserItem: React.FC<DialogItemPropsType> = (props) => {
    const {userId, userName} = props;

    return (
        <div className={`user`}>
            <div className={`user__wrapper`}>
                <div className={`user__logo`}></div>
                <NavLink className={`user__name`} to={`/dialogs/${userId}`}>{userName}</NavLink>
            </div>
        </div>
    )
}

export default UserItem;