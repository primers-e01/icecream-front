export type ProductDataRoot = {
  productData: ProductData;
  tradeAll: TradeAll[];
  tradeLimit: TradeLimit[];
  chartData: ChartData[];
};

export type ProductData = {
  id: number;
  brandName: string;
  enName: string;
  krName: string;
  thumbnailImageUrl: string;
  recentTradePrice: string;
  modelNumber: string;
  categoryId: number;
  releaseDate: string;
  color: string;
  originalPrice: string;
  buyNow: string;
  sellNow: string;
  images: ProductImage[];
};

export type ProductImage = {
  alt: string;
  url: string;
};

export type TradeAll = {
  tradeDataAll: TradeHistoryData[];
  buyBidDataAll: TradeHistoryData[];
  sellBidDataAll: TradeHistoryData[];
  [data: string]: TradeHistoryData[];
};

export type TradeLimit = {
  [data: string]: TradeHistoryData[];
};

export type TradeHistoryData = {
  id: string;
  size: string;
  date: string;
  price: string;
  // [key: number]: any;
};

export type ChartData = {
  id: number;
  data: { y: string; x: string }[];
};
