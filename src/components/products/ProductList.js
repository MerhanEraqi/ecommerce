import React, { Component } from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { fetchProducts } from "../../app/actions/productActions";
import { addToCart } from "../../app/actions/cartActions";
import Modal from "react-modal";
import Product from "./Product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from "../Pagination";
import Loader from "../Loader";
import Toast from "../Toast";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            currentPage: 1,
            productsPerPage: 5,
            addedSuccessfully: false,
        };
    }


    componentDidMount() {
        this.props.fetchProducts();
    }

    openModal = (product) => {
        this.setState({ product });
    };

    handleSuccessMessage = () => {
        this.setState({
            addedSuccessfully: true
        })

        setTimeout(() => {
            this.setState({
                addedSuccessfully: false
            })
        }, 2000);
    }

    handleAddToCartBtnClicked = (product) =>{
        this.props.addToCart(product)
        this.handleSuccessMessage()
    }

    closeModal = (isProductAdded) => {
        this.setState({ product: null });
        isProductAdded = typeof isProductAdded !== 'boolean' ? false : true;
        if(isProductAdded){this.handleSuccessMessage()};
    };


    render() {
        let { product } = this.state;
        const products = this.props.products;
        let indexOfLastPage = 0;
        let indexOfFirstPage = 0;
        let currentProducts = [];

        const paginate = (pageNumber) => {
            this.setState({
                currentPage: pageNumber
            })
        };

        if (!products || !products.length) {
            return (
                <Loader />
            )
        } else {
            indexOfLastPage = this.state.currentPage * this.state.productsPerPage;
            indexOfFirstPage = indexOfLastPage - this.state.productsPerPage;
            currentProducts = products.slice(indexOfFirstPage, indexOfLastPage);
        }



        return (
            <Container className="container">
                <Toast isAdded={this.state.addedSuccessfully}/>
                <h2 className="title pb-3">Recent Arrivals</h2>
                <div className="tab-content">
                    <div className="tab-pane p-0 fade show active" id="top-all-tab" role="tabpanel" aria-labelledby="top-all-link">
                        <div className="products">
                            <div className="row justify-content-center w-100">
                                {currentProducts.map((product, index) => (
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
                                                    <h3 className="product-title">{product.name}</h3>
                                                    <div className="product-price">
                                                        ${(Math.round(product.price).toFixed(2))}
                                                    </div>
                                                </ProductDetails>
                                            </a>
                                            <div className="product-action">
                                                <button onClick={() => {this.handleAddToCartBtnClicked(product) }} className="btn-product btn-cart mt-3">
                                                    <span>add to cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </ProductCard>
                                ))}

                                <Pagination
                                    currentPage={this.state.currentPage}
                                    totalProducts={products.length}
                                    productsPerPage={this.state.productsPerPage}
                                    paginate={paginate}
                                />
                            </div>
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
                                position: 'relative',
                                background: 'white',
                                padding: '10vh 40px',
                                width: '80%',
                                maxWidth: 'calc(100vw - 2rem)',
                                maxHeight: 'calc(100vh - 2rem)',
                                overflowY: 'auto',
                                position: 'relative',
                                border: 'none',
                                borderRadius: '0.3rem',
                                //   height: '80vh',
                                top: '0px',
                                left: '0px',
                                boxShadow: 'rgb(0 0 0 / 69%) 8px 10px 30px -10px'
                            }
                        }}>
                        <div className="h-100">
                            <a className="btn close-modal position-absolute top-0 end-0 p-4 text-black h4" onClick={this.closeModal}>
                                <FontAwesomeIcon icon={faClose} />
                            </a>
                            <Product className="w-100 h-100" product={product}  closeModal={this.closeModal}/>
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
.title{
    margin-bottom: 15px;
    font-size: 24px;
    text-align: center;
    letter-spacing: -.03em;
    font-weight: 400;
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
    padding: 16px 20px 75px;
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