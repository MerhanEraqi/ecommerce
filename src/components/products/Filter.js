import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../../app/actions/productActions";
import styled from 'styled-components';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: '',
    };
  }

  onFilterChange(value) {
    this.props.filterProducts(this.props.products, value);
    this.setState({
      currentCategory: value
    });
  };

  render() {
    return !this.props.filteredProducts ? (
      <div>Loading...</div>
    ) : (
      <Container className="heading heading-center mb-3">
        <h2 className="title">Top Selling Products</h2>

        <Nav className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
          <li className="nav-item">
            <button className={`nav-link ${this.state.currentCategory == '' ? "active" : ""}`} role="button" onClick={() => this.onFilterChange('')}>All</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${this.state.currentCategory == 'furniture' ? "active" : ""}`} role="button" onClick={() => this.onFilterChange('furniture')}>Furniture</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${this.state.currentCategory == 'decor' ? "active" : ""}`} role="button" onClick={() => this.onFilterChange('decor')}>Decoration</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${this.state.currentCategory == 'lighting' ? "active" : ""}`} role="button" onClick={() => this.onFilterChange('lighting')}>Lighting</button>
          </li>
        </Nav>
      </Container>
    );
  }
}
export default connect(
  (state) => ({
    category: state.products.category,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts
  }
)(Filter);


const Container = styled.div`
  .title{
    margin-bottom: 15px;
    font-size: 24px;
    text-align: center;
    letter-spacing: -.03em;
    font-weight: 400;
  }
`

const Nav = styled.ul`
  
  .nav-item {    
    .nav-link {
      color: #333;
      font-size: 16px;
      font-weight: 400;
      padding: 4.5px 10px;
      background-color: transparent;
      transition: all .35s ease;
      border-radius: 0;
      border-bottom: 0;
      text-align: center;
      text-transform: uppercase;
  

      &:active{
        color: #c96;
      }
    }

    .active {
      color: #333;
      border-bottom: 1px solid #333;
      background: none;
    }
  }
    
`

