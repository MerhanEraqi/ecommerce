import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart, addToCart, decrementFromCart } from "../../app/actions/cartActions";
import { connect } from "react-redux";
import styled from 'styled-components';

class CartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          product: null,
        };
    }

    render(){
        const { product } = this.state;

        return (
            <div className="cart">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Table className="table table-cart table-mobile">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
    
                                <tbody>
                                    {(this.props.cartItems <= 0) ? (
                                        <tr><td>No Product Found</td></tr>
                                    ) : (
                                        <React.Fragment>
                                            {this.props.cartItems.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="product-col">
                                                        <div className="product d-flex align-items-center">
                                                            <figure className="product-media">
                                                                <a href="#">
                                                                    <img className="w-100 h-100" src={item.photos[1]} alt="product" />
                                                                </a>
                                                            </figure>
    
                                                            <h3 className="product-title">
                                                                {item.name}
                                                            </h3>
                                                        </div>
                                                    </td>
                                                    <td className="price-col">${(Math.round(item.price).toFixed(2))}</td>
                                                    <td className="quantity-col">
                                                        <Quantity className="input-spinner">
    
                                                            <div className="cart-product-quantity position-relative d-flex">
                                                                <div className="input-group-prepend left-0">
                                                                    <button onClick={() => this.props.decrementFromCart(item)} className="h-100 btn btn-decrement btn-spinner px-2" type="button">
                                                                        <FontAwesomeIcon className="" icon={faMinus} />
                                                                    </button>
                                                                </div>
                                                                <input type="number" className="form-control text-center" value={item.count} min="1" max="10" step="1"  required />
                                                                <div className="input-group-append right-0">
                                                                    <button onClick={() => {this.props.addToCart(item)}} className="h-100 btn btn-increment btn-spinner px-2">
                                                                        <FontAwesomeIcon className="" icon={faPlus} />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Quantity>
                                                    </td>
                                                    <td className="total-col">${(Math.round(item.price * item.count).toFixed(2))}</td>
                                                    <td className="remove-col"><button onClick={() => this.props.removeFromCart(item)} className="btn btn-remove"><FontAwesomeIcon className="w-75" icon={faClose} /></button></td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    )}
    
                                </tbody>
                            </Table>
    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
 
}

export default connect(
    (state) => ({
        cartItems: state.cart.cartItems
    }),
    { removeFromCart, addToCart, decrementFromCart }
)(CartList);

const Table = styled.table`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #999;

    tbody{
        border: none !important;
    }

    th, thead th, td {
        border-top: none;
        border-bottom: 0.1rem solid #ebebeb;        
    }

    @media screen and (max-width: 991px){
        max-width: 80vw;
        margin: auto;

        thead{
            display: none;
        }
    }

    tr{
        position: relative;
        @media screen and (max-width: 991px){
            border: 0.1rem solid #ebebeb;
            padding: 40px 0;
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
        }
    }

    td{
        padding-top: 30px;
        padding-bottom: 30px;
        vertical-align: middle;
        .product-title{
            font-size: 16px;
            color: #333;
            font-weight: 400;
            line-height: 1.25;
            margin: 0;
        }

        @media screen and (max-width: 991px){
            display: flex;
            border: none;
            padding: 0 !important;
            padding: 1px 30px 6px !important;
            width: 100% !important;
            justify-content: center;
        }

        .product-media {
            display: inline-block;
            margin: 0;
            margin-right: 8px;
            flex-shrink: 0;
            max-width: 60px;
    
            position: relative;
            display: block;
            background-color: #d7d7d7;
            margin-bottom: 0;
            overflow: hidden;
        }
        .product {
            display: flex;
            align-items: center;
            margin: 0;
            padding-right: 2rem;
            box-shadow: none;
        }
        .btn-remove {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 3rem;
            color: #cccccc;
            background-color: transparent;
            font-size: 17px;
            font-weight: 300;
            line-height: 1;
            border: none;
            outline: none;
            transition: all .35s;
        }
    }

    .total-col {
        color: #c96;
        font-weight: 400;
        font-size: 16px;
    }

    .price-col {
        width: 140px;
        color: #333;
        font-weight: 400;
        font-size: 16px;
        justify-content: center;
    }

    .quantity-col{
        width: 138px;
        .cart-product-quantity{
            width:100px;
        }
    }

    .total-col {
        width: 80px;
    }

    .remove-col {
        padding-right: 0;
        padding-left: 0;
        width: 38px;
        text-align: right;
        @media screen and (max-width: 991px){
            position: absolute;
            top: 0;
            right: 0;
            padding: 0 !important;
            justify-content: flex-end;

        }
    }

`

const Quantity =styled.div`
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
    }

    input{
        padding: 15px 30px;
        text-align: center;
        height: auto;
        border-radius: 0;
        margin: 0;
        border: 1px solid #dadada !important;
    }
`