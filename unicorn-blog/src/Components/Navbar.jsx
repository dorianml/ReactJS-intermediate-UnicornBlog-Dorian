import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <header className="App-header">
            <div className='Logo'>
            <Link className='Nav-link-home' to='/'>
            LOGO
            </Link> 
            </div>
            <div className='Nav-links'>
            <Link className='Nav-link'  to='/upload'>
                Upload
            </Link>
            <Link className='Nav-link' to='/galery'>
                Galery
            </Link>
            </div>
        </header>
    )
}

export default NavBar

