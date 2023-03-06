import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '../Detail/store/Store';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface SizeType {
  id: number;
  size: number;
}
interface SizeDataType {
  size: number | null;
}
interface Props {
  closePortal: () => void;
}

const WishModal = ({ closePortal }: Props) => {
  const [activeIndex, setActiveIndex] = useState<Number>();
  const [sizeData, setSizeData] = useState<SizeDataType>({ size: null });

  const product = useAppSelector(state => state.ProductSlice);

  const navigate = useNavigate();

  const submit = async () => {
    try {
      if (sizeData.size === null) {
        return closePortal();
      }
      if (!localStorage.accessToken) {
        alert('로그인 후 이용해 주세요.');
        navigate('/signup');
      }
      await axios
        .post(
          '',
          {
            image: product.productData?.images[0].url,
            krname: product.productData?.krName,
            enname: product.productData?.enName,
            size: sizeData,
          },
          { headers: { Authorization: localStorage.accessToken } }
        )
        .then(closePortal);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WishModalContainer>
      <WishModalTitle>관심 상품 추가</WishModalTitle>
      <WishModalDetail>
        <WishImage src={product.productData?.images[0].url} alt="사진" />
        <WishLayout>
          <WishTitle>{product.productData?.krName}</WishTitle>
          <WishSubTitle>{product.productData?.enName}</WishSubTitle>
        </WishLayout>
      </WishModalDetail>
      <WishModalSize>
        {SIZE.map((item, idx) => {
          return (
            <Size
              key={item.id}
              className={idx === activeIndex ? 'active' : ''}
              onClick={() => {
                setActiveIndex(idx);
                setSizeData({ ...sizeData, size: item.size });
              }}
            >
              {item.size}
              <FontAwesomeIcon
                icon={idx === activeIndex ? fasBookmark : faBookmark}
              />
            </Size>
          );
        })}
      </WishModalSize>
      <WishButtonArea>
        <WishModalButton onClick={submit}>확인</WishModalButton>
      </WishButtonArea>
    </WishModalContainer>
  );
};

export default WishModal;

const WishModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WishModalTitle = styled.div`
  text-align: center;
  font-weight: bold;
  padding-bottom: 15px;
`;

const WishModalDetail = styled.div`
  display: flex;
  border-bottom: 1px solid #d3d3d3;
`;

const WishImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  padding-bottom: 5px;
`;

const WishLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const WishTitle = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
`;

const WishSubTitle = styled.div`
  font-weight: lighter;
  font-size: 13px;
`;

const WishModalSize = styled.div`
  padding-top: 30px;
  overflow: auto;
  height: 250px;
  display: grid;
  grid-template-columns: 250px 250px;
`;

const WishModalButton = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 15px;
  background-color: white;
  cursor: pointer;
`;

const Size = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 15px;
  cursor: pointer;

  &.active {
    border: 2px solid black;
  }
`;

const WishButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const SIZE: SizeType[] = [
  { id: 1, size: 230 },
  { id: 2, size: 240 },
  { id: 3, size: 250 },
  { id: 4, size: 260 },
  { id: 5, size: 270 },
  { id: 6, size: 280 },
];
