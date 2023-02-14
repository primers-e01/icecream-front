export const getQueryString = (queryMap: string) => {
  return (
    '?' +
    Object.entries(queryMap)
      .filter(([key, value]) => value)
      .map(query => query.join('='))
      .join('&')
  );
};
