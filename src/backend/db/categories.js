import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fiction",
    categoryImage:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-category-cases-protection?wid=150&hei=150&fmt=png-alpha&.v=1523297977190",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people"
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    categoryImage:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-category-audio-music?wid=150&hei=150&fmt=png-alpha&.v=1470069181201",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story."
  },
  {
    _id: uuid(),
    categoryName: "horror",
    categoryImage:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-mac?wid=150&hei=150&fmt=png-alpha&.v=1544482382615",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic."
  },
  {
    _id: uuid(),
    categoryName: "horror",
    categoryImage:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-ipad?wid=150&hei=150&fmt=png-alpha&.v=1544482382704",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic."
  },
  {
    _id: uuid(),
    categoryName: "horror",
    categoryImage:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/icon-product-watch?wid=150&hei=150&fmt=png-alpha&.v=1544482383418",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic."
  }
];
