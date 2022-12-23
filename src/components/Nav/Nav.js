import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavWrapper = styled.nav`
  height: 100px;
  background-color: green;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <div>
        Nav Component
        <FontAwesomeIcon
          className="fontawesome"
          icon="fa-solid fa-magnifying-glass"
        />
      </div>
    </NavWrapper>
  );
};

export default Nav;
