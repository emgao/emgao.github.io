import React from 'react'
import { Link } from 'react-router-dom'

const Social = () => {
    return (
        <div className="contact-widgets">
            <div className="widget"><a href="https://twitter.com/emilyqgao" target="_blank" rel="noopener noreferrer"><img src="twitter.png" alt="Twitter"></img></a></div>
            <div className="widget"><a href="https://www.instagram.com/doyoucanoe/" target="_blank" rel="noopener noreferrer"><img src="instagram.png" alt="Instagram"></img></a></div>
            <div className="widget"><Link to="/contact"><img src="email.png" alt="Contact"></img></Link></div>
        </div>
    )
}
export default Social