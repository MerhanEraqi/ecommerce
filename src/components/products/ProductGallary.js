import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function ProductGallary() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        //   autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />

    };

    return (
        <Carousal className="product-slider-container h-100">
            <Slider {...settings}>
                <Wrap className='product-slide h-100'>
                    <img className='w-100 h-100' src='https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=air-jordan-design-footwear-1598505.jpg&fm=jpg' alt='badag' />
                </Wrap>
                <Wrap className='product-slide h-100'>
                    <img className='w-100 h-100' src='https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=air-jordan-design-footwear-1598505.jpg&fm=jpg' alt='badag' />
                </Wrap>
                <Wrap className='product-slide h-100'>
                    <img className='w-100 h-100' src='https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&dl=air-jordan-design-footwear-1598505.jpg&fm=jpg' alt='badag' />
                </Wrap>
            </Slider>
        </Carousal>
    );
}

export default ProductGallary;

const ArrowLeft = (props) => (
    <button  {...props} className={'prev btn'}>
        <FontAwesomeIcon icon={faChevronLeft} />
    </button>
);

const ArrowRight = (props) => (
    <button  {...props} className={'next btn'}>
        <FontAwesomeIcon icon={faChevronRight} />
    </button>
);

const Carousal = styled.div`
.slick-slider, .slick-list, .slick-track {
    height: 100%;
}
.slick-slide{
    height: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
}


.slick-list{
    position: relative;
}

.prev, .next{
    display: block;
    display: block;
    position: absolute;
    top: 50%;
    z-index: 10000000;
    color: white;
    left: 0;
    background: #c96;
    border-radius: 0;
    border: none !important;
}

.next{
    right:0;
    left: auto;
}

`;
const Wrap = styled.div`
img{
    object-fit: cover;
}


`;
