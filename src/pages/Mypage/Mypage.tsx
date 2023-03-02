import React, { useState } from 'react';
import styled from 'styled-components';
import WishList from './WishList';
import ShoppingList from './ShoppingList';

interface MyPageType {
  [key: string]: JSX.Element;
}
const Mypage = () => {
  const [tab, setTab] = useState<string>('찜목록');
  return (
    <MyPageContainer>
      <MyPageList>
        <Title>마이페이지</Title>

        <SubTitle>쇼핑 정보</SubTitle>
        <Menu>
          {MENU_TAB.map((item, idx) => {
            return (
              <MenuItem
                key={idx}
                onClick={() => {
                  setTab(item);
                }}
                className={tab === item ? 'active' : ''}
              >
                {item}
              </MenuItem>
            );
          })}
        </Menu>
      </MyPageList>
      {MY_PAGE[tab]}
    </MyPageContainer>
  );
};

export default Mypage;

const MyPageContainer = styled.div`
  display: flex;
  margin-top: 105px;
`;

const MyPageList = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 500px;
  margin-left: 40px;
`;

const Menu = styled.div``;

const Title = styled.div`
  margin-top: 50px;
  line-height: 29px;
  padding-bottom: 30px;
  font-size: 24px;
  letter-spacing: -0.36px;
  font-weight: 700;
`;

const SubTitle = styled.div`
  line-height: 22px;
  margin-bottom: 12px;
  display: inline-block;
  vertical-align: top;
  font-size: 18px;
  letter-spacing: -0.27px;
  font-weight: 700;
`;

const MenuItem = styled.div`
  margin-top: 12px;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;
const MENU_TAB: string[] = ['찜목록', '구매내역'];

const MY_PAGE: MyPageType = {
  찜목록: <WishList />,
  구매내역: <ShoppingList />,
};
