import React from 'react';
import Header from '../header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';
import './HeroSection.css';

import {motion} from 'framer-motion';

const HeroSection = () => {

    const transition = {type: 'spring', duration: 3};
    const mobile = window.innerWidth <= 768;

    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    
                </div>
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter 
                                end={5} 
                                start={0} 
                                delay="1"
                                preFix="+" 
                            />
                        </span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter 
                                end={300} 
                                start={100} 
                                delay="3"
                                preFix="+" 
                            />
                        </span>
                        <span>members</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <button className="btn">Learn More</button>
                </div>
            </div>

            <div className="right-h">
                <button className="btn">Log In</button>
                
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img 
                    initial={{ right: '11rem' }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    src={hero_image_back} 
                    alt=""
                    className="hero-image-back" 
                />
                
                
            </div>
        </div>
    );
};

export default HeroSection;
