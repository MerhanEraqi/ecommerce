import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { fetchProducts } from "../../app/actions/productActions";
import { addToCart } from "../../app/actions/cartActions";
import Filter from "./Filter";
import Modal from "react-modal";
import Product from "./Product";
import ProductGallary from "./ProductGallary";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
    }

    componentDidMount() {
        this.props.fetchProducts();
    }
    openModal = (product) => {
        this.setState({ product });
    };
    closeModal = () => {
        this.setState({ product: null });
    };


    render() {
        const { product } = this.state;

        return (
            <Container className="container">
                <Filter products={this.props.products} />
                <div className="tab-content">
                    <div className="tab-pane p-0 fade show active" id="top-all-tab" role="tabpanel" aria-labelledby="top-all-link">
                        <div className="products">
                            {!this.props.products ? (
                                <div>Loading...</div>
                            ) : (
                                <div className="row justify-content-center w-100">
                                    {this.props.products.map((product, index) => (
                                        <ProductCard className="col-6 col-sm-6 col-md-3 col-lg-2 mx-1" key={index}>
                                            <div className="product product-11 text-center">
                                                <a onClick={() => this.openModal(product)}>
                                                    <figure className="product-media">
                                                        <a >
                                                            <img src={product.photos[1]} alt="Product image" className="product-image" />
                                                            <img src={product.photos[2]} alt="Product image" className="product-image-hover" />
                                                        </a>
                                                    </figure>

                                                    <ProductDetails className="product-body">
                                                        <div className="product-cat">
                                                            {product.category}
                                                        </div>
                                                        <h3 className="product-title">{product.name}</h3>
                                                        <div className="product-price">
                                                            ${(Math.round(product.price).toFixed(2))}
                                                        </div>
                                                    </ProductDetails>
                                                </a>
                                                <div className="product-action">
                                                    <button onClick={() => { this.props.addToCart(product) }} className="btn-product btn-cart">
                                                        <span>add to cart</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </ProductCard>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <hr className="mt-1 mb-6" />
                </div>
                {product && (
                    <Modal ariaHideApp={false} isOpen={true} onRequestClose={this.closeModal}
                    style={{
                        overlay: {
                          position: 'fixed',
                          zIndex: 1020,
                          top: 0,
                          left: 0,
                          width: '100vw',
                          height: '100vh',
                          background: 'rgba(255, 255, 255, 0.75)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        },
                        content: {
                          background: 'white',
                          padding: '40px',
                          width: '80%',
                          maxWidth: 'calc(100vw - 2rem)',
                          maxHeight: 'calc(100vh - 2rem)',
                          overflowY: 'auto',
                          position: 'relative',
                          border: '1px solid #ccc',
                          borderRadius: '0.3rem',
                          height: '70vh',
                          top: '0px',
                          left: '0px'
                        }}}>
                        <div className="position-relative h-100">
                            <a className="close-modal position-absolute p-4" onClick={this.closeModal}>
                                x
                            </a>
                            <Product className="w-100 h-100" product={product} />
                        </div>
                    </Modal>
                )}
            </Container>
        );
    }
}

export default connect(
    (state) => ({ products: state.products.filteredItems }),
    {
        fetchProducts,
        addToCart
    }
)(ProductList);

const Container = styled.div`
    .close-modal{
        top: 0;
        right: 0; 
    }
`
const ProductCard = styled.div`
    crusor: pointer;
    position: relative;
    margin-bottom: 1rem;
    transition: box-shadow .35s ease;
    background-color: #fff;

    img{
        width: 100%;
    }
    
    a{
        text-decoration: none;
    }

    .product-action{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        background-color: rgba(255,255,255,0.95);
        z-index: 10;
        transition: all .35s ease;
        opacity: 0;
        visibility: hidden;
        transform: translateY(100%);
        bottom: 2rem;
    }

    .btn-product{
        color: #c96;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        line-height: 1;
        transition: all .35s ease;
        text-transform: uppercase;
        color: #333;
        border: 0.1rem solid #ebebeb;
        margin-left: 20px;
        margin-right: 20px;
        padding-top: 8px;
        padding-bottom: 8px;
        flex-grow: 1;
        &:active {
            transform: scale(0.98);
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24) !important;
        }
    }

    .product-image-hover{
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        width: 100%;
        height: auto;
        transition: all .4s ease;
    }


    }
    &:hover{
        box-shadow: 0 5px 20px rgb(0 0 0 / 5%) !important;
        .product-image-hover{
            opacity: 1;
            
        }
        .product-action{
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
        }
    }

`

const ProductDetails = styled.div`
    padding-bottom: 7rem;
    position: relative;
    padding: 16px 20px 70px;
    transition: all .35s ease;
    background-color: #fff;

    .product-cat {
        color: #777;
        font-weight: 300;
        font-size: 13px;
        line-height: 1.2;
        letter-spacing: -.01em;
        margin-bottom: 0.3rem;
    }

    .product-title {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.25;
        letter-spacing: -.01em;
        color: #333333;
        margin-bottom: 0.2rem;
    }
    .product-price {
        color: #333;
        font-size: 16px;
    }
`
