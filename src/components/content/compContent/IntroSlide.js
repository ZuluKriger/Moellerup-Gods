import React from 'react';
import '../../../styles/IntroSlide.scss';
import { Carousel } from 'react-bootstrap';

function IntroSlide() {
    return(
        <section className="IntroSlide">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="/img/introSlide/banner1.png" alt="Moellerup Gods" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/img/introSlide/banner2.png" alt="Moellerup Gods" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/img/introSlide/banner3.png" alt="Moellerup Gods" />
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default IntroSlide;