import React from 'react';
import './Dialogs.css';
import {ActionType, DialogsPageType, ProfilePageType} from '../../redux/state';
import {addMessageActionCreator, readMessageActionCreator} from '../../redux/dialogsReducer';
import {EmptyObject, Store} from 'redux';
import Dialogs from './Dialogs';

type DialogsType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType, dialogsPage: DialogsPageType }, ActionType>
}

const DialogsContainer: React.FC<DialogsType> = ({store}) => {
    const state = store.getState();
    const {dialogsPage} = state;
    const {newMessage, dialogsData, usersData} = dialogsPage;

    const addNewMessage = () => {
        store.dispatch(addMessageActionCreator());
    }

    const readValue = (text: string) => {
        store.dispatch(readMessageActionCreator(text))
    }

    return (
        <Dialogs dialogsData={dialogsData} usersData={usersData} newMessage={newMessage} addNewMessage={addNewMessage}
                 readValue={readValue}/>
    )
}

export default DialogsContainer;