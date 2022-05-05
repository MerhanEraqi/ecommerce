import { connect } from "react-redux";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from "../../app/actions/cartActions";
import ProductGallary from "./ProductGallary";
import styled from 'styled-components';

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrementQuantity = () => {
        if(quantity > 1 ){
            setQuantity(quantity - 1)
        }
    }

    const addToCartBtnClicked = (product) => {
        props.addToCart(product, quantity);
    }


    return (
        <Container className="product product-single row mb-2 h-100">
            <div class="col-12 col-sm-12 col-md-6 col">
                <div class="product-gallery pg-vertical product-gallery-sticky h-100">
                    <ProductGallary/>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 details-col">
                <ProductDetails class="product-details">
                    <h1 class="product-name">{props.product.name}</h1>
                    <div class="ratings-container">
                        <div class="ratings">
                            <div class="ratings-val">
                            <span>
                                <FontAwesomeIcon className="rate-start" icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon className="rate-start" icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon className="rate-start" icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon className="rate-start" icon={faStar} />
                            </span>
                            <span>
                                <FontAwesomeIcon className="rate-start" icon={faStarHalf} />
                            </span>
                            </div>
                        </div>
                        <span class="ratings-text mt-0">
                            ( 2 Reviews )
                        </span>
                    </div>
                    <div class="product-price">${props.product.price}</div>

                    <div class="product-content">
                        <p>
                            ${props.product.description}
                        </p>
                    </div>
                </ProductDetails>
                <div class="details-filter-row details-row-size">
                    <div class="product-details-quantity">

                        <div className="input-group  input-spinner d-flex align-items-center">
                        <span >Quantity: </span>

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
                                <button onClick={() => { addToCartBtnClicked(props.product) }} className="btn-product btn-cart">
                                    <span>ADD TO CART</span>
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
.ReactModal__Content {
    position: absolute;
    left: 2.5rem;
    right: 2.5rem;
    top: 2.5rem;
    bottom: 2.5rem;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,97,0.5);
    overflow: auto;
    border-radius: 4px;
    outline: none;
}

.details-col{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
    .col{
        height: 100%;
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

const Quantity =styled.div`
margin-bottom: 14px;
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