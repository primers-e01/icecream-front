import React from 'react';
import styled from 'styled-components';

const Tablet = () => {
  return <MobileNav>tablet</MobileNav>;
};

export default Tablet;

const MobileNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  z-index: ${({ theme }) => theme.nav};
  box-shadow: 4px 0 10px 0 rgb(0 0 0 / 10%);
`;
