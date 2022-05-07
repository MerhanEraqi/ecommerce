import React from 'react';
import styled from 'styled-components';

export const Pagination = (props) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalProducts / props.productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
            <PaginationList className="pagination">
                <li className="page-item">
                    
                    <button className="page-link" disabled={(props.currentPage) == 1 ? true : false} onClick={() => { props.paginate(props.currentPage - 1) }} >Previous</button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} className='page-item'>
                        <button onClick={() => { props.paginate(number) }} className={`page-link ${ props.currentPage == number ? 'active' : ''}`}>
                            {number}
                        </button>
                    </li>
                ))}
                <li className="page-item">
                    <button onClick={() => { props.paginate(props.currentPage + 1) }}  className="page-link" disabled={(props.productsPerPage * props.currentPage) >= props.totalProducts ? true : false}>Next</button>
                </li>
            </PaginationList>
        </nav>
    );
};

const PaginationList = styled.ul`
    border-radius: 0;
    align-items: center;
    margin-bottom: 2rem;

    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;
    justify-content: center!important;

    .page-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 30px;
        height: 40px;
        font-weight: 400;
        font-size: 14px;
        padding: 0 0.3rem;
        line-height: 1;
        color: #706f6c;
        border-radius: 0.3rem;
        background-color: transparent;
        border: 0.1rem solid transparent;
    }    

    .active {
        color: #c96;
        background-color: transparent;
        border-color: #ebebeb;
    }
    
    .page-link:focus, .page-link:hover {
        color: #c96;
        background-color: transparent;
        border-color: #ebebeb;
    }

    .page-link:disabled {
        border-color: transparent;
        color: #eaeaea;
    }
`


