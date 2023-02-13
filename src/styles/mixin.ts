import { css } from 'styled-components';

export const flexBox = (jc = 'center', ai = 'center', fd = 'row') => css`
  display: flex;
  justify-content: ${jc};
  align-items: ${ai};
  flex-direction: ${fd};
`;

export const positionCenter = (position = 'absolute') => {
  if (!(position === 'absolute' || position === 'fixed')) return;
  return css`
    position: ${position};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
};
