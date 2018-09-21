const initialState = [
  {
    id: 1,
    name: "Iphone 8",
    image: "https://cdn.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-1-400x460-1-400x460.png",
    description: "Sản phẩm của Apple",
    price: 500,
    inventory: 10,
    rating: 5
  },
  {
    id: 2,
    name: "Iphone 7 Plus",
    image: "https://cdn.tgdd.vn/Products/Images/42/87840/iphone-7-plus-256gb-hh-600x600.jpg",
    description: "Sản phẩm của Apple 2017",
    price: 400,
    inventory: 15,
    rating: 4
  },
  {
    id: 3,
    name: "Samsung Galaxy S8",
    image: "https://cdn.tgdd.vn/Products/Images/42/78479/samsung-galaxy-s8-4-400x460-400x460.png",
    description: "Sản phẩm của Samsung",
    price: 300,
    inventory: 5,
    rating: 5
  }
];

const products = (state = initialState, action) => {
  switch(action.type) {
    default:
      return [...state];
  }
};

export default products;