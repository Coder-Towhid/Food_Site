// CarouselComponent.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselComponent.css"
import SamplePrevArrow from './customArrowLeft';
import SampleNextArrow from './customArrowRight';


const CarouselComponent = ({ slidesToShow = 1, autoplay = true, autoplaySpeed = 3000, children }) => {
    const settings = {
        loop: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,       // Controlled by props
        slidesToScroll: 1,
        autoplay: autoplay,               // Controlled by props
        autoplaySpeed: autoplaySpeed,     // Controlled by props
        arrows: true,
        prevArrow: <SamplePrevArrow />,  // Use custom previous arrow
        nextArrow: <SampleNextArrow />,  // Use custom next arrow
        responsive: [
            {
                breakpoint: 1024, // For large screens (lg)
                settings: {
                    slidesToShow: 4, // 4 slides for large screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // For medium screens (md)
                settings: {
                    slidesToShow: 2, // 2 slides for medium screens
                    slidesToScroll: 1,
                },
            },

            {
                breakpoint: 640, // For small screens (sm)
                settings: {
                    slidesToShow: 1, // 1 slide for small screens
                    slidesToScroll: 1,
                },
            }

        ],

    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {children}                     {/* Render any passed-in children */}
            </Slider>
        </div>
    );
};

export default CarouselComponent;
