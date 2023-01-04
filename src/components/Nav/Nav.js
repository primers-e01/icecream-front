import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { flexBox } from '../../styles/mixin';

const NAV_TOP = [
  { id: 1, list: '고객센터', link: '/notice' },
  { id: 2, list: '마이페이지', link: '/mypage' },
  { id: 3, list: '로그인 / 회원가입', link: '/signup' },
];

const NAV_MAIN = [
  { id: 1, list: 'STYLE', link: '/style' },
  { id: 2, list: 'SHOP', link: '/shop' },
  { id: 3, list: 'ABOUT', link: '/about' },
  {
    id: 4,
    list: <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="2x" />,
  },
];

const Nav = () => {
  return (
    <NavWrapper>
      <NavTopBox>
        <NavTopList>
          {NAV_TOP.map(({ id, list, link }) => {
            return (
              <NavTopItem key={id}>
                <Link to={link}>{list}</Link>
              </NavTopItem>
            );
          })}
        </NavTopList>
      </NavTopBox>

      <NavMainBox>
        <NavLogoBox>
          <Link to="/">ICECREAM</Link>
        </NavLogoBox>
        <NavMainList>
          {NAV_MAIN.map(({ id, list, link }) => {
            return (
              <NavMainItem key={id}>
                <Link to={link}>{list}</Link>
              </NavMainItem>
            );
          })}
        </NavMainList>
      </NavMainBox>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  z-index: ${({ theme }) => theme.nav};
  box-shadow: 4px 0 10px 0 rgb(0 0 0 / 10%);
`;

const NavTopBox = styled.div`
  padding: 10px 40px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const NavTopList = styled.ul`
  ${flexBox('flex-end')}
`;

const NavTopItem = styled.li`
  color: ${({ theme }) => theme.mainBrandGray08};
  font-size: 12px;
  margin-left: 24px;
  letter-spacing: 1px;
`;

const NavMainBox = styled.div`
  ${flexBox('space-between', 'center', '')}
  padding: 0 40px;
  height: 68px;
`;

const NavLogoBox = styled.div``;

const NavMainList = styled.ul`
  ${flexBox()}
`;

const NavMainItem = styled.li`
  font-size: 15px;
  letter-spacing: 1px;
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }
`;
