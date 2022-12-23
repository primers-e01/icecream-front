import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  height: 739px;
  background-color: lightgreen;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>Footer Component</div>
    </FooterWrapper>
  );
};

export default Footer;
