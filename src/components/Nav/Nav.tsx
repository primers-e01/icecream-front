import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { flexBox } from '../../styles/mixin';

interface NavMainType {
  id: number;
  list: string | JSX.Element;
  link?: string;
}

const NAV_TOP = [
  { id: 1, list: '고객센터', link: '/notice' },
  // { id: 2, list: '마이페이지', link: '/mypage' },
];

const NAV_MAIN = [
  { id: 1, list: 'STYLE', link: '/style?filterBy=trending' },
  { id: 2, list: 'SHOP', link: '/products' },
  { id: 3, list: 'ABOUT', link: '/about' },
  {
    id: 4,
    list: <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />,
  },
];
const Nav = () => {
  const navigate = useNavigate();

  const token =
    (localStorage.getItem('accessToken') ||
      localStorage.getItem('access_token')) ??
    '';

  const logOutClick = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('access_token');
    navigate('/');
  };

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
          <NavTopItem>
            {token ? (
              <NavFlex>
                <NavMainItem>
                  <Link to="/mypage">마이페이지</Link>
                </NavMainItem>
                <LogOutBtn onClick={logOutClick}>로그아웃</LogOutBtn>
              </NavFlex>
            ) : (
              <Link to="/signup">로그인 / 회원가입</Link>
            )}
          </NavTopItem>
        </NavTopList>
      </NavTopBox>

      <NavMainBox>
        <NavLogoBox>
          <Link to="/">
            <LogoImg
              src="https://cdn.discordapp.com/attachments/1060384508286877719/1060410692068450385/052f177d26f60b77.png"
              alt="Logo"
            />
          </Link>
        </NavLogoBox>
        <NavMainList>
          {NAV_MAIN.map(({ id, list, link }: NavMainType) => {
            return (
              <NavMainItem key={id}>
                {/* TODO: 나중에 확인 link undefined 처리 필요*/}
                {link ? <Link to={link}>{list}</Link> : ''}
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

const LogOutBtn = styled.span`
  cursor: pointer;
`;

const NavMainBox = styled.div`
  ${flexBox('space-between', 'center', '')}
  padding: 0 40px;
  height: 68px;
`;

const NavLogoBox = styled.div``;

const LogoImg = styled.img`
  width: 130px;
`;

const NavMainList = styled.ul`
  ${flexBox()}
`;

const NavMainItem = styled.li`
  font-size: 12px;
  letter-spacing: 1px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const NavFlex = styled.div`
  display: flex;
`;
