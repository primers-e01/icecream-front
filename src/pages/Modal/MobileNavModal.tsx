import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface MobileNavType {
  id: number;
  category: string;
  link: string;
  active?: boolean;
}
interface Props {
  closePortal: () => void;
}

const MobileNavModal = ({ closePortal }: Props) => {
  const logOutClick = () => {
    localStorage.removeItem('token');
    navigate('/');
    closePortal();
  };

  const navigate = useNavigate();

  return (
    <NavModalContainer>
      {MOBILE_NAV.map(items => {
        const { id, category, link } = items;
        return (
          <NavModalCategory
            key={id}
            onClick={() => {
              navigate(link);
              closePortal();
            }}
          >
            {category}
          </NavModalCategory>
        );
      })}
      {localStorage.token ? (
        <NavModalCategory onClick={logOutClick}>로그아웃</NavModalCategory>
      ) : (
        <NavModalCategory
          onClick={() => {
            navigate('signup');
          }}
        >
          로그인
        </NavModalCategory>
      )}
    </NavModalContainer>
  );
};

export default MobileNavModal;

const NavModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const NavModalCategory = styled.div`
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const MOBILE_NAV: MobileNavType[] = [
  { id: 1, category: 'HOME', link: '/' },
  { id: 2, category: 'SHOP', link: 'shop' },
  { id: 3, category: 'MY', link: localStorage.token ? 'mypage' : 'signup' },
];
