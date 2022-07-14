import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Case",
    price: "5000",
    rating: 5,
    categoryName: "Cases & Protection"
  },
  {
    _id: uuid(),
    title: "You are Winner",
    rating: 5,
    price: "3000",
    categoryName: "Headphones"
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    rating: 5,
    price: "1000",
    categoryName: "Laptops"
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    rating: 5,
    price: "1000",
    categoryName: "Smart watches"
  }
];
