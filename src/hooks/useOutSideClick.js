import { useEffect } from 'react';

const useOutSideClick = (ref, handler) => {
  useEffect(() => {
    const close = e => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener('mousedown', close);

    return () => {
      document.removeEventListener('mousedown', close);
    };
  }, [ref, handler]);
};

export default useOutSideClick;
