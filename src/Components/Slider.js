import React from 'react'
import img1 from './Icons/1.jpg';
import img2 from './Icons/2.jpg';
import img3 from './Icons/3.jpg';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './CSS/Slider.css'

const Slider = () => {
    return (
        <div className="Slider">
            <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled={true} className="carousel">
                <img src={img1} alt="" className="sliderimg"/>
                <img src={img2} alt="" className="sliderimg"/>
                <img src={img3} alt="" className="sliderimg"/>              
            </AliceCarousel>
        </div>
    )
}

export default Slider
