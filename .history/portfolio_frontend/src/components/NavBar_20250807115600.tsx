import React from 'react';

import {Link} from 'react-router-dom'



const NavBar: React.FC = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 flex flex-wrap justify-center gap-4">
            <Link to="/" className='hover:underline'>Home</Link>
            <Link to="/projects" className='hover:underline'>Projects</Link>
            <Link to="/about" className='hover:underline'>About</Link>
            <Link to="/fetching" className='hover:underline'>learnFetch</Link>
        </nav>
    )
}

export default NavBar;