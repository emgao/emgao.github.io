import React from 'react'
import { Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className = "header">
            <div className="header-name"><Link to="/">Emily Gao</Link></div>
            <div className="header-item"><NavLink to="/writing">Writing</NavLink></div>
            <div className="header-item"><NavLink to="/contact">Contact</NavLink></div>
        </div>
    )
}
export default Navbar