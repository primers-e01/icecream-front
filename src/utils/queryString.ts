import { Query } from 'src/pages/Shop/types';

export const getQueryString = (queryMap: Query) => {
  return (
    '?' +
    Object.entries(queryMap)
      .filter(([value]) => value)
      .map(query => query.join('='))
      .join('&')
  );
};
