import React from 'react';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpeg';

import './Home.css'
const Home = () => {
    return (
        <>
        <div>
            <p className="question">What countries would you like to visit?</p>
                <img src={image1} alt="" className="Upper"/>
                <img src={image2} alt="" className="Upper"/>
                <img src={image3} alt="" className="Upper"/>
                <img src={image4} alt="" className="Upper"/>
                <img src={image5} alt="" className="Upper"/>
                <img src={image6} alt="" className="Upper"/>
                <img src={image7} alt="" className="Upper"/>
                <img src={image8} alt="" className="Upper"/>
                <img src={image9} alt="" className="Upper"/>

            <footer className="footer"><p>"Nothing develops the mind like traveling" – Emile Zola.</p></footer>

        </div>
        </>
);
};

export default Home;