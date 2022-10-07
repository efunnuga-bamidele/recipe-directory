import { Link } from 'react-router-dom'
// Style
import './Navbar.css'

export default function Navbar(){
    return(
        <div className='navbar'>
            <nav>
                <Link to="/" className='brand'>
                    <h1>Cooking Recipe App</h1>
                </Link>
                <Link to='/create'>Create Recipe</Link>

            </nav>
        </div>
    )
}