export type Query = {
  categoryId: string;
  shoesize: string;
  clothsize: string;
  categoryKey?: string;
};

export type ShopData = {
  id: number;
  price: string;
  thumbnailImageUrl: string;
  brandName: string;
  enName: string;
  krName: string;
  releaseDate?: string;
};
