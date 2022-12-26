import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const MENU_LIST = [
  { id: 1, list: '이용안내' },
  { id: 2, list: '검수기준' },
  { id: 3, list: '이용 정책' },
  { id: 4, list: '페널티 정책' },
  { id: 5, list: '커뮤니티 가이드라인' },
];

const CORPORATION_LIST = [
  { id: 1, list: '회사소개' },
  { id: 2, list: '인재채용' },
  { id: 3, list: '제휴제안' },
  { id: 4, list: '이용약관' },
  { id: 5, list: '개인정보처리방침' },
];

const CORPORATION_ICON = [
  { id: 1, list: <FontAwesomeIcon icon="fa-brands fa-instagram" size="2x" /> },
  { id: 2, list: <FontAwesomeIcon icon="fa-brands fa-facebook" size="2x" /> },
  { id: 3, list: <FontAwesomeIcon icon="fa-solid fa-comment" size="2x" /> },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <ServiceSection>
        <MenuListBox>
          <MenuList>
            {MENU_LIST.map(({ id, list }) => {
              return <MenuItem key={id}>{list}</MenuItem>;
            })}
          </MenuList>
          <MenuList>
            {MENU_LIST.map(({ id, list }) => {
              return <MenuItem key={id}>{list}</MenuItem>;
            })}
          </MenuList>
        </MenuListBox>
        <CustomerServiceBox>
          <CustomerServiceTitle>고객센터 1234-1234</CustomerServiceTitle>
          <CustomerServiceTime>
            운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무)
            <br />
            점심시간 평일 13:00 - 14:00
          </CustomerServiceTime>
          <CustomerServiceNotice>
            1:1 문의하기는 앱에서만 가능합니다.
          </CustomerServiceNotice>
          <span>
            <CustomerServiceLink to="#">자주 묻는 질문</CustomerServiceLink>
          </span>
        </CustomerServiceBox>
      </ServiceSection>

      <CorporationSection>
        <CorporationList>
          {CORPORATION_LIST.map(({ id, list }) => {
            return <CorporationItem key={id}>{list}</CorporationItem>;
          })}
        </CorporationList>
        <CorporationIconList>
          {CORPORATION_ICON.map(({ id, list }) => {
            return <CorporationIconItem key={id}>{list}</CorporationIconItem>;
          })}
        </CorporationIconList>
        <CororationInfo>
          아이스크림 주식회사 · 대표 임다슬
          <Blank />
          사업자등록번호 : 123-45-67890
          <Blank />
          사업자정보확인 통신판매업 : 제 2022-서울A-1234호
          <Blank />
          사업장소재지 : 서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉
          2호점)
          <Blank />
          호스팅 서비스 : 위코드 클라우드 ㈜
        </CororationInfo>
      </CorporationSection>

      <GuaranteeSection>
        <p>위코드은행 채무지급보증 안내</p>
        <GuaranteeDescriptionParagraph>
          당사는 고객님의 현금 결제 금액에 대해 위코드은행과 채무지급보증 계약을
          체결하여 안전거래를 보장하고 있습니다.
          <GuaranteeLink to="#">서비스가입 사실 확인</GuaranteeLink>
        </GuaranteeDescriptionParagraph>
      </GuaranteeSection>

      <NoticeSection>
        <NoticeParagraph>
          아이스크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별
          판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다. 단,
          거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.
        </NoticeParagraph>
        <p>© KREAM Corp.</p>
      </NoticeSection>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  border-top: ${({ theme }) => theme.globalBoardStyle};
  padding: 50px 40px;
`;

const ServiceSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 56px;
  border-bottom: ${({ theme }) => theme.globalBoardStyle};
`;

const CustomerServiceBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomerServiceTitle = styled.strong`
  font-size: 16px;
  font-weight: 700;
`;

const CustomerServiceTime = styled.span`
  font-size: 13px;
  padding-top: 8px;
  line-height: 20px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const CustomerServiceNotice = styled.span`
  font-size: 13px;
  padding-top: 8px;
`;

const CustomerServiceLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  padding: 0 14px;
  margin-top: 17px;
  height: 34px;
  color: #fafafa;
  background-color: ${({ theme }) => theme.mainBrandBlack};
`;

const MenuListBox = styled.div`
  display: flex;
`;

const MenuList = styled.ul`
  &:last-child {
    margin-left: 80px;
  }
`;

const MenuItem = styled.li`
  font-size: 14px;
  width: 160px;
  margin-top: 16px;
  color: ${({ theme }) => theme.mainBrandGray05};
  cursor: pointer;

  &:first-child {
    font-weight: 700;
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 18px;
    color: ${({ theme }) => theme.mainBrandBlack};
    cursor: text;
  }
`;

const CorporationSection = styled.section`
  position: relative;
  margin-top: 30px;
`;

const CorporationList = styled.ul`
  display: flex;
  padding-bottom: 16px;
`;

const CorporationItem = styled.li`
  color: #000;
  margin-right: 20px;
  font-size: 14px;
  cursor: pointer;

  &:last-child {
    font-weight: 700;
  }
`;

const CorporationIconList = styled.ul`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
`;

const CorporationIconItem = styled.li`
  margin-left: 20px;
  cursor: pointer;
`;

const CororationInfo = styled.div`
  font-size: 13px;
  max-width: 620px;
  line-height: 20px;
  letter-spacing: -0.7px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const Blank = styled.span`
  margin-right: 17px;
`;

const GuaranteeSection = styled.section`
  font-size: 12px;
  letter-spacing: -0.06px;
  padding: 40px 0 8px;
`;

const GuaranteeDescriptionParagraph = styled.p`
  margin-top: 4px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const GuaranteeLink = styled(Link)`
  text-decoration: underline;
`;

const NoticeSection = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.mainBrandGray05};
`;

const NoticeParagraph = styled.p`
  max-width: 625px;
`;
