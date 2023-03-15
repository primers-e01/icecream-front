import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface props {
  children: JSX.Element;
  closePortal: () => void;
  width: string;
  height: string;
  position: string;
  top: string;
  left: string;
}

const ModalPortal = ({
  children,
  closePortal,
  width,
  height,
  position,
  top,
  left,
}: props) => {
  // const ref = useRef<Element | null>();
  const ref = useRef<HTMLDivElement | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []); // 스크롤 고정 코드
  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.getElementById('modal');
      if (dom instanceof HTMLDivElement) {
        ref.current = dom; // HTMLDivElement 타입인 경우에만 ref.current에 할당
      }
    }
  }, []);
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current && e.target === ref.current) {
      closePortal();
    }
  };

  if (ref.current && mounted) {
    // mounted 됬고 dom이 존재하는 경우 모달 랜더링 진행
    return createPortal(
      <ModalBackGround onClick={handleClickOutside}>
        <ModalContainer
          width={width}
          height={height}
          position={position}
          top={top}
          left={left}
        >
          <CloseModal onClick={closePortal}>x</CloseModal>
          {children}
        </ModalContainer>
      </ModalBackGround>,
      ref.current
    );
  }
  return null;
};

export default ModalPortal;

const ModalBackGround = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div<{
  width: string;
  height: string;
  position: string;
  top: string;
  left: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: white;
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  transform: translate(-50%, -50%);
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  padding: 20px;
`;

const CloseModal = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: end;
  cursor: pointer;
`;
