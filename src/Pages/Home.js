import React from 'react';
import styled from 'styled-components';
import ProductList from '../components/products/ProductList';
import HeaderSection from '../components/layout/HeaderSection';
import Toast from '../components/Toast';

const Home = () => {
    return (
        <Container>
            <HeaderSection title="Products" subTitle="Products"/>
            <ProductList />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    min-height: calc(100vh - 152px);
`