import React from 'react'
import Social from './Social'

const Home = () => {
    return (
        <div className="homepage-content">
            <div className="bio-image">
                <img src="biopic.JPG" alt="Emily"></img>
            </div>
            <div className="bio-textbox">
                <div className="bio-text">
                    <p>Emily Gao is a humor writer and product manager based in New York City.</p>
                    <p>Emily enjoys writing about the tech industry and the mundane horrors of the workplace, drawing from her experience as a corporate drone. She is a graduate of the University of Pennsylvania and has studied at the Second City, Magnet Theater, and UCB.</p>
                    <p>Like a good Millennial, Emily has many side hustles. She sells hats that say HAT through her online store, <a href="https://www.pithyapparel.com">Pithy Apparel.</a></p>
                </div>
                <Social />
            </div>
        </div>
    )
}

export default Home