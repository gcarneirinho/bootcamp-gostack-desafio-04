import React from 'react';
import './App.css';
import Logo from './assets/logo-facebook.png';
import Header from './components/Header';
import PostList from './components/PostList'


function App() {

    const user = {
        nome: 'Nicolas Cage',
        avatar_url: 'https://www.placecage.com/26/26/',
        face_link: 'https://facebook.com/ncage/'
    }

    return (
        <div className="container">
            <Header logo={Logo} user={user} />
            <PostList />
        </div>
    )
}

export default App;