import { React, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { EffectFade, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = ({ images }) => {
  const swiperRef = useRef(null);

  if (!images) return;

  return (
    <StyledSwiper
      effect="fade"
      scrollbar={{ hide: false, draggable: true }}
      modules={[EffectFade, Scrollbar]}
      className="mySwiper"
      ref={swiperRef}
    >
      {/* TODO : 추후에 백 통신 후 alt 변경 */}
      {images.map(({ alt, url }) => {
        return (
          <SwiperSlide key={url}>
            <img src={url} alt={alt} width="400px" height="auto" />
          </SwiperSlide>
        );
      })}
      <PrevBtn onClick={() => swiperRef.current.swiper.slidePrev()}>
        <FontAwesomeIcon
          className="icon"
          icon="fa-solid fa-chevron-left"
          size="2x"
        />
      </PrevBtn>
      <NextBtn onClick={() => swiperRef.current.swiper.slideNext()}>
        <FontAwesomeIcon
          className="icon"
          icon="fa-solid fa-chevron-right"
          size="2x"
        />
      </NextBtn>
    </StyledSwiper>
  );
};

export default Carousel;

const PrevBtn = styled.div`
  position: absolute;
  left: 10px;
  bottom: 50%;
  transform: translateY(50%);
  z-index: 10;
  cursor: pointer;

  & .icon * {
    color: rgba(245, 245, 245, 0.5);
  }
`;

const NextBtn = styled.div`
  position: absolute;
  right: 10px;
  bottom: 50%;
  transform: translateY(50%);
  z-index: 10;
  cursor: pointer;

  & .icon * {
    color: rgba(245, 245, 245, 0.5);
  }
`;

const StyledSwiper = styled(Swiper)`
  .swiper-slide img {
    display: block;
    width: 100%;
    user-select: none;
  }

  .swiper-scrollbar {
    background: rgba(34, 34, 34, 0.1);
  }

  .swiper-scrollbar-drag {
    background-color: ${({ theme }) => theme.mainBrandBlack};
  }

  .swiper-horizontal > .swiper-scrollbar,
  .swiper-scrollbar.swiper-scrollbar-horizontal {
    bottom: 24px;
    height: 2px;
    left: 3%;
    width: 94%;
  }
`;
