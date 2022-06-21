import React from 'react'

const NavBar = () => {
    return(
        <header className="App-header">
            <div className='Logo'>
            <a className='Nav-link-home' href='/'>
            LOGO
            </a>
            </div>
            <div className='Nav-links'>
            <a className='Nav-link'  href='/upload'>
                Upload
            </a>
            <a className='Nav-link' href='/galery'>
                Galery
            </a>
            </div>
        </header>
    )
}

export default NavBar

