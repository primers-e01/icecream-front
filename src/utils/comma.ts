export const comma = (value: string) =>
  String(value).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
