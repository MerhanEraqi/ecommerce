import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faClose } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart } from "../../app/actions/cartActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { cartItems } = props;

  return (
    <header className="header">
      <NavBar className="container position-relative">
        {/* Left Header side */}
        <Logo className="logo" href="/">
          <img
            src="images/logo.png"
            alt="Logo"
          />
        </Logo>

        {/* right header side */}
        <Cart className="cart-dropdown h-100 d-flex justify-content-center align-items-center">
          {/* cart icon */}
          <CartICon type="button" className="position-relative">
            <FontAwesomeIcon className="" icon={faShoppingCart} />

            <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
              {cartItems.length}
              <span className="visually-hidden">cart count</span>
            </span>
          </CartICon>

          {/* Cart dropdown */}
          <div className="dropdown-cart">
            <div className="dropdown-cart-products">
              {(cartItems <= 0) ? (
                <div className='d-inline-block w-100 text-center p-2'>No products in the cart.</div>
              ) : (
                <React.Fragment>
                  {cartItems.map((item, index) => (
                    <Product className="product" key={index}>
                      <div className="product-cart-details">
                        <h4 className="product-title">
                          {item.name}
                        </h4>

                        <span className="cart-product-info">
                          <span className="cart-product-qty">{item.count} x </span>${item.price}
                        </span>
                      </div>

                      <figure className="product-image-container">
                        <a className="product-image">
                          <img src={item.photos[1]} alt="product" />
                        </a>
                      </figure>
                      <button onClick={() => props.removeFromCart(item)} className="btn btn-remove" title="Remove Product">
                        <FontAwesomeIcon className="w-75" icon={faClose} />
                      </button>
                    </Product>
                    
                  ))}
                              <div className="dropdown-cart-total">
              <span>Total</span>

              <span className="cart-total-price">${cartItems.reduce((a, c) => a + c.price * c.count, 0)}</span>
            </div>

            <div className="dropdown-cart-action">
              <Link to="/cart" className="btn btn-primary">
                View Cart
              </Link>
            </div>
                </React.Fragment>
              )}
            </div>


          </div>
        </Cart>
      </NavBar>
    </header>
  );
};

export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
  }),
  { removeFromCart }
)(Header);

const NavBar = styled.div`
  height: 6rem;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.a`
  img{
    height: 105px;
    width: 15vw;
    object-fit: contain;
    min-width: 65px;
    max-width: 150px;
  }
`
const Cart = styled.div`
  padding-left: 30px;
  .dropdown-cart{
    display: none;
    font-size: 14px;
    font-weight: 400;
    color: #666;
    position: absolute;
    left: auto;
    right: 0;
    top:99%;
    width: 300px;
    z-index: 100;
    border: none;
    margin: 1px 0 0;
    padding: 22px 30px 25px;
    border-radius: 0;
    box-shadow: 5px 10px 16px rgb(51 51 51 / 5%), -5px 10px 16px rgb(51 51 51 / 5%);
    background-color: #fff;
    transition: all .25s;

    .dropdown-cart-action .btn {
      font-size: 13px;
      min-width: 110px;
      padding: 7.5px 15px;
      color: #fff;
      background-color: #c96;
      border-color: #c96;
      border-radius: 0;
    }
    .dropdown-cart-total{
      display: flex;
      justify-content: space-between;
      margin: 0px 0px 11px;
      padding: 10px 0px 5px;
      span{
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
        color: #666;
      }
      .cart-total-price{
        font-size: 15px;
      }
    }
  }

  &:hover{
    .dropdown-cart{
      display: block;
    }
  }
}
`

const Product = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 16px 24px 16px 0px;  
  border-bottom: 1px solid #ebebeb;

  .product-title {
    font-weight: 400;
    font-size: 13px;
    color: #666;
  }
  .cart-product-info{
    font-weight: 400;
    max-width: 150px;
    font-size: 13px;
    color: #999;
  }
  .product-image-container {
    position: relative;
    max-width: 48px;
    margin: 0;
    margin-left: auto;
    img{
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

  .btn-remove {
    position: absolute;
    top: 50%;
    right: -0.55rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.4rem;
    color: #cccccc;
    font-size: 1.3rem;
    line-height: 1;
    text-align: center;
    margin-top: -1.2rem;
  }
`

const CartICon = styled.a`
  color: black !important;
  position: relative;
  pointer: crusor;
  font-size: 25px;
  .badge{
    padding: 0.25em 0.55em;
    font-size: 0.45em;
    bottom: 25px;
  }
`