import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container className="footer footer-2">
      <div className="footer-bottom">
        <div className="container d-flex justify-content-center py-3">
          <p className="footer-copyright text-center m-0">
            Copyright © 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
background: #333;
  .footer-copyright{
      margin-bottom: 0;
      font-size: 16px;
      font-weight: 300;
      font-family: 'Poppins';
      letter-spacing: 0;
      color: #777;
  }
`