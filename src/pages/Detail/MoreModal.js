import { React, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API } from '../../config/config';
import { flexBox, positionCenter } from '../../styles/mixin';

const BTN_LIST = [
  { id: 1, list: '체결 거래 ', data: 'tradeDataAll' },
  { id: 2, list: '판매 입찰', data: 'sellBidDataAll' },
  { id: 3, list: '구매 입찰', data: 'buyBidDataAll' },
];

const MoreModal = ({ setIsMoreClicked }) => {
  const [isFilterClicked, setIsFilterClicked] = useState(1);
  const [tableData, setTableData] = useState();
  const [loadData, setLoadData] = useState();

  const ref = useRef(null);

  // TODO : 이해하기
  useEffect(() => {
    let dataList = BTN_LIST.find(item => item.id === isFilterClicked);
    const observer = new IntersectionObserver(e => {
      if (e[0].isIntersecting) {
        fetch(`${API.products}/3`, {
          method: 'GET',
        })
          .then(response => response.json())
          .then(result => {
            setTableData(result?.data?.tradeAll[0]);
            setLoadData(result?.data?.tradeAll[0].tradeDataAll);
          });
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  const onCloseClick = () => {
    setIsMoreClicked(false);
    document.body.style.overflow = 'scroll';
  };

  const onFilterClick = (id, data) => {
    if (isFilterClicked === Number(id)) return;
    setIsFilterClicked(isFilterClicked === Number(id) ? null : Number(id));

    setLoadData(tableData[data]);
  };

  return (
    <ModalWrapper>
      <IconBox>
        <FontAwesomeIcon
          icon="fa-solid fa-x"
          size="lg"
          onClick={onCloseClick}
        />
      </IconBox>
      <ModalTitle>시세</ModalTitle>
      <ModalContent>
        <ItemBox>
          <ItemInfoBox>
            <ImgBox>
              <ItemImg
                src="http://placeimg.com/640/640/people"
                alt="제품 이미지"
              />
            </ImgBox>

            <ItemInfo>
              <ItemEnglishName>
                Jordan 1 Retro High OG Chicago 2022
              </ItemEnglishName>
              <ItemKoreanName>조던 1 레트로 하이 OG 시카고 2022</ItemKoreanName>
              <SizeBtn>
                <BtnText>모든 사이즈</BtnText>
                <BtnIcon>
                  <FontAwesomeIcon
                    className="icon"
                    icon="fa-solid fa-caret-down"
                  />
                </BtnIcon>
              </SizeBtn>
            </ItemInfo>
          </ItemInfoBox>
          <BtnList>
            {BTN_LIST.map(({ id, list, data }) => {
              return (
                <BtnItem
                  key={id}
                  id={id}
                  onClick={() => onFilterClick(id, data)}
                  clicked={isFilterClicked === id}
                >
                  {list}
                </BtnItem>
              );
            })}
          </BtnList>
        </ItemBox>
        <ListBox>
          <HeaderList>
            <HeaderItem>
              <ItemText>사이즈</ItemText>
              <FontAwesomeIcon className="icon" icon="fa-solid fa-sort" />
            </HeaderItem>
            <HeaderItem>
              <ItemText>거래가</ItemText>
              <FontAwesomeIcon className="icon" icon="fa-solid fa-sort" />
            </HeaderItem>
            <HeaderItem>
              <ItemText>거래일</ItemText>
              <FontAwesomeIcon className="icon" icon="fa-solid fa-sort" />
            </HeaderItem>
          </HeaderList>

          <TableWrapper>
            <TableBody>
              {/* TODO : 초기값 설정 */}
              {loadData?.map(({ id, size, price, date }) => {
                const KRPrice = Math.floor(price).toLocaleString('ko-KR');
                return (
                  <tr key={id}>
                    <td>{size}</td>
                    <td>{KRPrice}원</td>
                    <td>{date}</td>
                  </tr>
                );
              })}
            </TableBody>
          </TableWrapper>
          <div ref={ref} />
        </ListBox>
      </ModalContent>
    </ModalWrapper>
  );
};

export default MoreModal;

const ModalWrapper = styled.div`
  ${positionCenter('fixed')}
  width: 480px;
  background-color: #fff;

  z-index: ${({ theme }) => theme.alertModal};
  border-radius: 16px;
  box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h3`
  min-height: 60px;
  padding: 18px 50px 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: #000;
`;

const IconBox = styled.div`
  position: absolute;
  top: 18px;
  right: 20px;
  cursor: pointer;

  .svg-inline--fa {
    vertical-align: -2.5px;
  }
`;

const ModalContent = styled.div`
  background-color: transparent;
  height: 465px;
  /* padding: 0 32px 32px; */
  display: flex;
  flex-direction: column;
  /* overflow-y: auto; */
`;

const ItemBox = styled.div`
  /* display: flex; */
  /* overflow-y: auto; */
  padding: 0 32px;
`;

const ItemInfoBox = styled.div`
  display: flex;
  margin-bottom: 9px;
`;

const ImgBox = styled.div`
  width: 80px;
  height: 80px;
`;

const ItemImg = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
`;

const ItemInfo = styled.div`
  margin-left: 12px;
`;

const ItemEnglishName = styled.div`
  font-size: 15px;
  line-height: 19px;
`;

const ItemKoreanName = styled.div`
  font-size: 11px;
  margin-top: 2px;
  color: ${({ theme }) => theme.mainBrandGray05};
  line-height: 14px;
`;

const SizeBtn = styled.button`
  ${flexBox()}
  padding: 0 5px 0 12px;
  margin-top: 5px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid #ebebeb;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
`;

const BtnText = styled.p`
  font-weight: 700;
  line-height: 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.mainBrandGray08};
`;

const BtnIcon = styled.div`
  margin-left: 12px;
  width: 19px;
  height: 19px;
  border: 1px solid #ebebeb;
  border-radius: 50%;
`;

const ListBox = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 0 32px;
  margin-bottom: 32px;
`;

const BtnList = styled.ul`
  display: flex;
  background-color: #f4f4f4;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const BtnItem = styled.li`
  flex: 1;
  margin: 2px;
  font-size: 12px;
  padding: 8px 0 8px;
  border-radius: 8px;
  text-align: center;
  line-height: 16px;
  box-shadow: inset 0 0 0 0.5px #ebebeb;
  background-color: ${props => (props.clicked ? 'white' : 'transparent')};
  cursor: pointer;
`;

const HeaderList = styled.ul`
  display: flex;
  padding-bottom: 5px;
  border-bottom: 1px solid #ebebeb;
`;

const HeaderItem = styled.li`
  flex: 1;
  text-align: right;
  font-size: 13px;

  &:first-child {
    text-align: left;
  }

  & .icon * {
    color: #ebebeb;
  }
`;

const ItemText = styled.span`
  color: ${({ theme }) => theme.mainBrandGray08};
  margin-right: 4px;
  line-height: 18px;
`;

const TableWrapper = styled.table`
  margin: 10px 0;
  width: 100%;
`;

const TableBody = styled.tbody`
  text-align: right;
  font-size: 14px;
  line-height: 17px;
  & tr {
    display: flex;
  }

  & td {
    flex: 1;
    padding-top: 9px;
  }

  & td:first-child {
    text-align: left;
  }
`;
