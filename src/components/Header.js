import React from 'react';
import propTypes from 'prop-types';

function Header({logo, user}) {
    return (
        <header className='header'>
            {logo && <a href='https://www.facebook.com'><img className="logo" alt='Facebook' src={logo} style={{width: '121px', height: '24px'}}/></a>}
            <div className="header__login">
                <a href={user.face_link}>
                    <p>{user.nome}</p>
                    <img src={user.avatar_url} />
                </a>
            </div>
        </header>
    )
}

Header.defaultProps = {
    user: {
        nome: 'Usuário',
        avatar_url: 'https://www.placecage.com/25/25/',
        face_link: 'https://facebook.com/'
    }
}

Header.propTypes = {
    logo: propTypes.string.isRequired,
    user: propTypes.object
    
}

export default Header;