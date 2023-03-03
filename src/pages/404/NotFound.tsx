import React from 'react';
import styled from 'styled-components';
import { flexBox } from 'src/styles/mixin';

const NotFound = () => {
  return (
    <Wrapper>
      <NotFoundNumber>404</NotFoundNumber>
      <NotFoundText>Sorry, Not Found Page</NotFoundText>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ${flexBox()} */
  text-align: center;
  margin: 100px auto 0;
  padding: 30px 40px 120px;
  max-width: 1280px;
`;

const NotFoundNumber = styled.span`
  display: block;
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const NotFoundText = styled.span`
  font-size: 20px;
`;
export default NotFound;
