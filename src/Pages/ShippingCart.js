import React from 'react';
import styled from 'styled-components';
import CartList from "../components/cart/CartList";
import HeaderSection from '../components/layout/HeaderSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ShippingCart = () => {
    return (
        <Container>
            {/* cart header */}
            <HeaderSection title="Shopping Cart" />

            <Breadcrumb aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb m-0 p-0">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a></li>
                        <li className="">
                            <FontAwesomeIcon className="icon px-2" icon={faChevronRight} />
                            <a href="#">Shop</a></li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <FontAwesomeIcon className="icon px-2" icon={faChevronRight} />
                            Shopping Cart</li>
                    </ol>
                </div>
            </Breadcrumb>

            {/* cart list */}
            <CartList />

        </Container>
    )

}

export default ShippingCart;

const Container = styled.div`
    min-height: calc(100vh - 154px);
`

const Header = styled.div`
    background: url("images/page-header-bg.jpg");
    padding: 4.6rem 0 5rem;
    background-color: #ebebeb;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

const Breadcrumb = styled.nav`
    margin-bottom: 4rem;
    border-bottom: 0.1rem solid rgba(235,235,235,0.55);
    font-size: 14px;
    color: #333;
    padding: 14px 10px;

    a{
        color: #777;
        text-decoration: none;
    }

    .icon{
        color: #999999;
        padding-right: 0.7rem;
        font-size: 11px;
        vertical-align: middle;
        margin-top: -0.1rem;
    }
`
