import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Cases & Protection",
    categoryImage:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-category-cases-protection?wid=150&hei=150&fmt=png-alpha&.v=1523297977190"
  },
  {
    _id: uuid(),
    categoryName: "Headphones",
    categoryImage:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-category-audio-music?wid=150&hei=150&fmt=png-alpha&.v=1470069181201"
  },
  {
    _id: uuid(),
    categoryName: "Laptops",
    categoryImage:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-mac?wid=150&hei=150&fmt=png-alpha&.v=1544482382615"
  },
  {
    _id: uuid(),
    categoryName: "Tabs",
    categoryImage:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-ipad?wid=150&hei=150&fmt=png-alpha&.v=1544482382704"
  },
  {
    _id: uuid(),
    categoryName: "Smart watches",
    categoryImage:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-watch?wid=150&hei=150&fmt=png-alpha&.v=1544482383418"
  }
];
