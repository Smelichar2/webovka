import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Carousel.css';

const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
];

function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((index + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <div classname="carousel">
            <button onClick={prevSlide}>Předchozí</button>
            <TransitionGroup classname="carousel-slide">
                <CSSTransition key={index} timeout={500} classnames="slide">
                    <img src={images[index]} alt={`Slide ${index + 1}   `} />
                </CSSTransition>
            </TransitionGroup>
            <button onClick={nextSlide}>Další</button>
        </div>
    );
}

export default Carousel;