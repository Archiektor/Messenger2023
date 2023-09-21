import React from "react";
import './MessageItem.css';

type MessageItemPropsType = {
    messageId: number,
    message: string
}

const MessageItem: React.FC<MessageItemPropsType> = (props) => {
    const {message} = props;

    return (
        <div className={`message`}>
            {message}
        </div>
    )
}

export default MessageItem;