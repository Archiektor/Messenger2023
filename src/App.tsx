import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from './components/News/News';
import {ActionType, DialogsPageType, ProfilePageType} from './redux/state';
import {EmptyObject, Store} from 'redux';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type AppType = {
    store: Store<EmptyObject & { profilePage: ProfilePageType, dialogsPage: DialogsPageType }, ActionType>
}

const App: React.FC<AppType> = ({store}) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={`app-wrapper__content`}>
                {/*added exact to override bug behavior*/}
                <Route exact={true} path={`/profile`}
                       render={() => <Profile store={store}/>}/>
                <Route path={`/dialogs`}
                       render={() => <DialogsContainer store={store}/>}/>
                <Route path={`/news`} render={() => <News/>}/>
                <Route path={`/music`} render={() => <Music/>}/>
                <Route path={`/settings`} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
