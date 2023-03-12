import { useMediaQuery } from 'react-responsive';

interface Props {
  children: JSX.Element;
}

export const Mobile = ({ children }: Props): JSX.Element | null => {
  const isMoblie = useMediaQuery({ maxWidth: 767 });
  return isMoblie ? children : null;
};

export const DeskTop = ({ children }: Props): JSX.Element | null => {
  const isDeskTop = useMediaQuery({ minWidth: 1024 });
  return isDeskTop ? children : null;
};

export const Tablet = ({ children }: Props): JSX.Element | null => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet ? children : null;
};
