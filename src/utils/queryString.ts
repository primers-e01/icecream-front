export const getQueryString = queryMap => {
  return (
    '?' +
    Object.entries(queryMap)
      .filter(([key, value]) => value)
      .map(query => query.join('='))
      .join('&')
  );
};
