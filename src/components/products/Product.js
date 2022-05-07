import { connect } from "react-redux";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faStar, faStarHalfStroke, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from "../../app/actions/cartActions";
import ProductGallary from "./ProductGallary";
import styled from 'styled-components';

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);
    const totalStars = 5;

    const handleDecrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const addToCartBtnClicked = (product) => {
        props.addToCart(product, quantity);
    }


    return (
        <Container className="product product-single row mb-2 h-100">
            <div className="col-12 col-sm-12 col-md-6 col pb-4 pb-sm-4 pb-md-0 mb-4 mb-sm-4 mb-md-0">
                <div className="product-gallery pg-vertical product-gallery-sticky h-100">
                    <ProductGallary photos={props.product.photos} />
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 details-col">
                <ProductDetails className="product-details">
                    <h1 className="product-name">{props.product.name}</h1>
                    <div className="ratings-container">
                        <div className="ratings">
                            <div className="ratings-val">
                                {[...new Array(totalStars)].map((arr, index) => {
                                    return index < props.product.rate
                                        ? <span>
                                            <FontAwesomeIcon className='rate-start text-warning' icon={props.product.rate <= 0.5 + index ? faStarHalfStroke : props.product.rate <= 1 + index ? faStar : faStar} />
                                        </span>
                                        : <span>
                                            <FontAwesomeIcon className='rate-start' icon={faStar} />
                                        </span>;
                                })}

                            </div>
                        </div>
                        <span className="ratings-text mt-0">
                            ( {props.product.reviewsCount} Reviews )
                        </span>
                    </div>
                    <div className="product-price">${props.product.price}</div>

                    <div className="product-content">
                        <p>
                            ${props.product.description}
                        </p>
                    </div>
                </ProductDetails>
                <div className="details-filter-row details-row-size">
                    <div className="product-details-quantity">

                        <div className="input-group  input-spinner d-flex align-items-center">
                            <span className="quant">Quantity: </span>

                            <Quantity className="cart-product-quantity position-relative mx-3">
                                <div className="input-group-prepend">
                                    <button onClick={() => handleDecrementQuantity()} className="btn btn-decrement btn-spinner px-3" type="button">
                                        <FontAwesomeIcon className="" icon={faMinus} />
                                    </button>
                                </div>
                                <input type="number" className="form-control text-center" value={quantity} min="1" max="10" step="1" required />
                                <div className="input-group-append">
                                    <button onClick={() => setQuantity(quantity + 1)} className="btn btn-increment btn-spinner px-3">
                                        <FontAwesomeIcon className="" icon={faPlus} />
                                    </button>
                                </div>
                            </Quantity>

                        </div>
                        <div className="product-action">
                            <button id="addToCartBtn" onClick={() => { addToCartBtnClicked(props.product) }} className="btn-product btn-cart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="px-2">ADD TO CART</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default connect(
    (state) => ({
        cartItems: state.cart.cartItems
    }), { addToCart }
)(Product);

const Container = styled.div`
.quant {
    display: inline-block;
    font-size: 14px;
    width: 67px;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 0;
    color: #666;
}

.input-spinner{
    margin-bottom: 16px;
}

.details-col{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
    .col{
        height: 100%;
        @media screen and (max-width: 991px){
            height: fit-content;
        }
    }

    .btn-cart {
        padding: 10px 15px;
        color: #c96;
        border: 1px solid #c96;
        min-width: 198px;
        background: none;
    }
    .btn-product {
        color: #c96;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        line-height: 1;
        transition: all .35s ease;
        &:hover{
            color: #fff;
            border-color: #c96;
            background-color: #c96;
        }
    }

`

const ProductDetails = styled.div`
    .product-name {
        font-weight: 400;
        font-size: 24px;
        letter-spacing: -.025em;
        margin-bottom: 13px;
    }
    .product-price {
        display: flex;
        align-items: center;
        flex-flow: wrap;
        font-weight: 400;
        font-size: 24px;
        line-height: 1.25;
        color: #c96;
        margin-bottom: 13px;
    }
    .ratings-container{
        margin-bottom: 13px;
    }
    .ratings{
        display: inline-block;
    }
    .ratings-text {
        color: #ccc;
        letter-spacing: -.01em;
        margin-left: 0.8rem;
        font-size: 13px;
    }
    .rate-start {
        color: #ccc;
        font-size: 13px;
        padding-right: 1px;
    }
    .product-content {
        margin-bottom: 16px;
        p {
            margin-bottom: 0;
            font-size: 14px;
            font-weight: 300;
            letter-spacing: 0;
            color: #777;
        }
    }

`

const Quantity = styled.div`
    *{
        font-size: 14px;
        font-weight: 300 !important;
        color: #777;
        &:active{
            outline: none;
            border-color: transperant;
        }
    }

    .input-group-prepend, .input-group-append{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        button{
            border: none !important;
        }
    }

    .input-group-append{
        right: 0;
        top:0;
    }

    input{
        padding: 8px 28px;
        text-align: center;
        height: auto;
        border-radius: 0;
        margin: 0;
        border: 1px solid #dadada !important;
    }
`