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
};

export type TradeLimit = {
  // TODO: 인덱스 접근 질문
  [data: string]: TradeHistoryData[];
  tradeDataLimit: TradeHistoryData[];
  buyBidDataLimit: TradeHistoryData[];
  sellBidDataLimit: TradeHistoryData[];
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
