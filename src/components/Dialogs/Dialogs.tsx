import React from 'react';
import './Dialogs.css';

const Dialogs = () => {
    return (
        <div className={`dialogs`}>
            <div className={`dialogs__items`}>
                <div className={`dialog`}>Dimych</div>
                <div className={`dialog__active`}>Sveta</div>
                <div className={`dialog`}>Viktor</div>
                <div className={`dialog`}>Valera</div>
                <div className={`dialog`}>Vlad</div>
            </div>
            <div className={`dialogs__messages`}>
                <div className="message">Bla-bla</div>
                <div className="message">La-La-Land</div>
                <div className="message">Nightwish</div>
            </div>
        </div>
    )
}

export default Dialogs;