import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlide = index => {
    if (index < 0) {
      index = SLIDE.length - 1;
    } else if (index >= SLIDE.length) {
      index = 0;
    }
    setCurrentIndex(index);
  };

  const onClickSlideBtn = direction => {
    handleSlide(currentIndex + direction);
  };

  return (
    <CarouselWrapper>
      <CarouselPrevBtn onClick={() => onClickSlideBtn(-1)}>
        &#12296;
      </CarouselPrevBtn>
      <CarouselNextBtn onClick={() => onClickSlideBtn(1)}>
        &#12297;
      </CarouselNextBtn>
      <CarouselSliderList currentIndex={currentIndex}>
        {SLIDE.map(({ id, title, subTitle, url }) => (
          <CarouselSlideItem key={id}>
            <CarouselTitle>{title}</CarouselTitle>
            <CarouselSubTitle>{subTitle}</CarouselSubTitle>
            <button>
              <Link to="/products">자세히 알아보기 &#12297;</Link>
            </button>
            <img src={url} alt={title} />
          </CarouselSlideItem>
        ))}
      </CarouselSliderList>
    </CarouselWrapper>
  );
};

export default MainCarousel;

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselPrevBtn = styled.div`
  position: absolute;
  top: 45%;
  left: 80px;
  z-index: 90;
  font-size: 40px;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 1);
    transition: all 0.5s ease-in-out;
  }
`;

const CarouselNextBtn = styled.div`
  position: absolute;
  top: 45%;
  right: 80px;
  font-size: 40px;
  z-index: 90;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 1);
    transition: all 0.5s ease-in-out;
  }
`;

const CarouselSliderList = styled.div`
  width: 300%;
  height: 400px;
  display: flex;
  transform: translateX(${props => props.currentIndex * -33.3333}%);
  transition: all 0.7s ease-in-out;
`;

const CarouselSlideItem = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background-color: ${({ theme }) => theme.mainBrandBlack};

  button {
    all: unset;
    font-size: 22px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 90;
    color: white;
    border-bottom: ${({ theme }) => theme.globalBoardStyle};

    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    opacity: 0.4;
    object-position: 0px -300px;
  }
`;

const CarouselTitle = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 90;
  font-size: 46px;
  font-weight: Bold;
  color: white;
`;

const CarouselSubTitle = styled.h2`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  color: ${({ theme }) => theme.buttonBuy};
  z-index: 90;
`;

const SLIDE = [
  {
    id: 1,
    title: 'Artist x COLABO 협업 굿즈',
    subTitle: '선착순 구매 기회',
    url: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80',
  },
  {
    id: 2,
    title: '12일간 매일 다른 선물',
    subTitle: '12/23(금) ~ 1/6(금) / 매일 오전 10시 - 자정 12시',
    url: 'https://images.unsplash.com/photo-1602067120389-6af881963470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 3,
    title: '판매 시 선착순 3만 포인트',
    subTitle: '1/6(금) 00:00~ 예약 소진 시 자동 종료 ',
    url: 'https://images.unsplash.com/photo-1594035795389-9363dd86b113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];
