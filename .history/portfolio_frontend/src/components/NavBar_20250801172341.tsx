import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className='bg-blue-600' text-white p-4 gap-6 >
            <Link to="/" className='hover:underline'>Home</Link>
            <Link to="/projects" className='hover:underline'>Projects</Link>
            <Link to="/about" className='hover:underline'>About</Link>
            <Link to="/fetching" className='hover:underline'>learnFetch</Link>
        </nav>
    )
}