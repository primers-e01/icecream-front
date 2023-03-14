import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { flexBox } from '../../styles/mixin';

const Mobile = () => {
  return (
    <MobileNav>
      <NavMainBox>
        <NavLogoBox>
          <Link to="/">
            <LogoImg
              src="https://cdn.discordapp.com/attachments/1060384508286877719/1060410692068450385/052f177d26f60b77.png"
              alt="Logo"
            />
          </Link>
        </NavLogoBox>
      </NavMainBox>
    </MobileNav>
  );
};

export default Mobile;

const MobileNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  z-index: ${({ theme }) => theme.nav};
  box-shadow: 4px 0 10px 0 rgb(0 0 0 / 10%);
`;
const NavMainBox = styled.div`
  ${flexBox('space-between', 'center', '')}
  padding: 0 40px;
  height: 100px;
`;
const NavLogoBox = styled.div``;

const LogoImg = styled.img`
  width: 130px;
`;
