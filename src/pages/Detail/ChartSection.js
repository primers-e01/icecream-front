import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ChartLine from './ChartLine';
import MoreModal from './MoreModal';
import useOutSideClick from '../../hooks/useOutSideClick';
import { flexBox } from '../../styles/mixin';

const CHART_SELLLIST = [
  { id: 1, size: '260', price: 200000, date: '22/12/28' },
  { id: 2, size: '270', price: 320000, date: '22/12/28' },
  { id: 3, size: '280', price: 420000, date: '22/12/28' },
  { id: 4, size: '240', price: 430000, date: '22/12/28' },
  { id: 5, size: '250', price: 420000, date: '22/12/28' },
];

const CHART_BUYLIST = [
  { id: 1, size: '260', price: 380000, date: '22/12/28' },
  { id: 2, size: '270', price: 390000, date: '22/12/28' },
  { id: 3, size: '250', price: 320000, date: '22/12/28' },
  { id: 4, size: '270', price: 320000, date: '22/12/28' },
  { id: 5, size: '280', price: 340000, date: '22/12/28' },
];

const CHART_SOLDLIST = [
  { id: 1, size: '280', price: 530000, date: '22/12/28' },
  { id: 2, size: '240', price: 420000, date: '22/12/28' },
  { id: 3, size: '240', price: 540000, date: '22/12/28' },
  { id: 4, size: '250', price: 520000, date: '22/12/28' },
  { id: 5, size: '270', price: 480000, date: '22/12/28' },
];

const CHART_FILTERLIST = [
  { id: 1, list: '1개월' },
  { id: 2, list: '3개월' },
  { id: 3, list: '6개월' },
  { id: 4, list: '1년' },
  { id: 5, list: '전체' },
];

const CHART_DEALLIST = [
  { id: 6, list: '체결 거래', data: CHART_SOLDLIST },
  { id: 7, list: '판매 입찰', data: CHART_SELLLIST },
  { id: 8, list: '구매 입찰', data: CHART_BUYLIST },
];

const ChartSection = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(5);
  const [isDealClicked, setIsDealClicked] = useState(6);
  const [isLoadData, setIsLoadData] = useState([...CHART_SOLDLIST]);

  const [isMoreOpen, setIsMoreClicked] = useState(false);

  const ref = useRef();

  const onFilterClick = ({ target }) => {
    if (isFilterClicked === Number(target.id)) {
      return;
    }
    setIsFilterClicked(
      isFilterClicked === Number(target.id) ? null : Number(target.id)
    );
  };

  const onDealClick = (id, data) => {
    if (isDealClicked === Number(id)) {
      return;
    }
    setIsDealClicked(isDealClicked === Number(id) ? null : Number(id));
    setIsLoadData(data);
  };

  const onMoreClick = () => setIsMoreClicked(true);

  useOutSideClick(ref, () => setIsMoreClicked(false));

  return (
    <>
      <ChartTitle>시세</ChartTitle>
      <ChartBtnList>
        {CHART_FILTERLIST.map(({ id, list }) => {
          return (
            <ChartBtnItem
              key={id}
              id={id}
              onClick={onFilterClick}
              clicked={isFilterClicked === id}
            >
              {list}
            </ChartBtnItem>
          );
        })}
      </ChartBtnList>

      <ChartLine />

      <ChartBtnList>
        {CHART_DEALLIST.map(({ id, list, data }) => {
          return (
            <ChartBtnItem
              key={id}
              id={id}
              onClick={() => onDealClick(id, data)}
              clicked={isDealClicked === id}
            >
              {list}
            </ChartBtnItem>
          );
        })}
      </ChartBtnList>

      <ChartTableWrapper>
        <ChartTableHead>
          <tr>
            <th>사이즈</th>
            <th>거래가</th>
            <th>거래일</th>
          </tr>
        </ChartTableHead>

        <ChartTableBody>
          {/* TODO : 클릭한 메뉴의 리스트로 변경 */}
          {isLoadData.map(({ id, size, price, date }) => {
            const KRPrice = price.toLocaleString('ko-KR');
            return (
              <tr key={id}>
                <td>{size}</td>
                <td>{KRPrice}원</td>
                <td>{date}</td>
              </tr>
            );
          })}
        </ChartTableBody>
      </ChartTableWrapper>

      <ChartMoreBtn onClick={onMoreClick}>체결 내역 더보기</ChartMoreBtn>
      <div ref={ref}>
        {isMoreOpen && <MoreModal setIsMoreClicked={setIsMoreClicked} />}
      </div>
    </>
  );
};

export default ChartSection;

const ChartTitle = styled.h3`
  padding: 40px 0 20px;
  font-size: 18px;
  font-weight: 600;
`;

const ChartBtnList = styled.ul`
  display: flex;
  background-color: #f4f4f4;
  border-radius: 10px;
  width: 100%;
`;

const ChartBtnItem = styled.li`
  flex: 1;
  margin: 2px;
  padding: 7px 0 9px;
  font-size: 13px;
  border-radius: 8px;
  color: ${({ theme }) => theme.mainBrandGray08};
  background-color: ${props => (props.clicked ? 'white' : 'transparent')};
  text-align: center;
  line-height: 16px;
  box-shadow: inset 0 0 0 0.5px #ebebeb;
  cursor: pointer;
`;

const ChartTableWrapper = styled.table`
  margin: 20px 0;
  width: 100%;
`;

const ChartTableHead = styled.thead`
  text-align: right;
  border-bottom: ${({ theme }) => theme.globalBoardStyle};
  font-size: 12px;

  & th {
    color: ${({ theme }) => theme.mainBrandGray05};
    padding-bottom: 9px;
  }

  & th:first-child {
    text-align: left;
  }
`;

const ChartTableBody = styled.tbody`
  text-align: right;
  font-size: 14px;
  line-height: 17px;

  & td {
    padding-top: 9px;
  }

  & td:first-child {
    text-align: left;
  }
`;

const ChartMoreBtn = styled.button`
  ${flexBox()}
  width: 100%;
  height: 42px;
  font-size: 14px;
  border: 1px solid #d3d3d3;
  background-color: #fff;
  border-radius: 12px;
  color: ${({ theme }) => theme.mainBrandGray08};
  cursor: pointer;
`;
