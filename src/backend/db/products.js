import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: "",
    title: "Case",
    price: "500",
    rating: 5,
    categoryName: "Cases & Protection"
  },
  {
    _id: uuid(),
    image:
      "https://res.cloudinary.com/anujk/image/upload/v1647462976/mxw_1440_f_auto_t86qct.png",
    title: "Sony headphones",
    rating: 4,
    price: "3000",
    categoryName: "Headphones"
  },
  {
    _id: uuid(),
    image: "https://eaglestore.netlify.app/images/card-image3.png",
    title: "Macbook air",
    rating: 5,
    price: "15000",
    categoryName: "Laptops"
  },
  {
    _id: uuid(),
    image: "https://eaglestore.netlify.app/images/card-image2.avif",
    title: "Apple watch",
    rating: 5,
    price: "1000",
    categoryName: "Smart watches"
  },
  {
    _id: uuid(),
    image: "",
    title: "Apple watch",
    rating: 5,
    price: "1000",
    categoryName: "Smart watches"
  }
];
