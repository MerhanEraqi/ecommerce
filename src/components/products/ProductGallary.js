import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function ProductGallary(props) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        //   autoplaySpeed: 2000,
        pauseOnHover: true,
        // nextArrow: <ArrowRight />,
        // prevArrow: <ArrowLeft />

    };

    return (
        <Carousal className="product-slider-container h-100">
            <Slider {...settings}>
                {props.photos.map((photo, index) => (
                    <Wrap className='product-slide' key={index}>
                        <img className='w-100 h-100' src={photo} alt='badag' />
                    </Wrap>
                ))}
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
*{
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
}
.slick-slider, .slick-list, .slick-track {
    height: 100%;
}
.slick-slide{
    height: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    // overflow: visible;
}


  .slick-dots li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  .slick-dots li.slick-active button {
    &:before {
      color: #c96;
    }
  }
  button {
    z-index: 1;
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
    opacity: 0.8;
    border-raduis: 50%;
}

.next{
    right:0;
    left: auto;
}

`;
const Wrap = styled.div`
    height: 450px;
    @media screen and (max-width: 991px){
        height: 250px;
    }
    img{
        object-fit: contain;
    }
`;
