import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from './components/News/News';
import {StateType} from './redux/state';

type AppType = {
    state: StateType
    addPost: (postMessage:string) => void
}

const App: React.FC<AppType> = ({state,addPost}) => {
    const {profilePage, dialogsPage} = state;

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={`app-wrapper__content`}>
                {/*added exact to override bug behavior*/}
                <Route exact={true} path={`/profile`} render={() => <Profile state={profilePage.postsData} addPost={addPost}/>}/>
                <Route path={`/dialogs`}
                       render={() => <Dialogs state={dialogsPage}/>}/>
                <Route path={`/news`} render={() => <News/>}/>
                <Route path={`/music`} render={() => <Music/>}/>
                <Route path={`/settings`} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
