const shortText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};
const searchProduct = (products, search) => {
  if (!search) return products;
  const searchProducts = products.filter((p) => p.title.toLowerCase().includes(search));
  return searchProducts;
};
const filterProduct = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter((p) => p.category == category);
  return filteredProducts;
};
const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};
const sumProduct = (products) => {
  const itemsCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0
  );
  const total = products
    .reduce((total, cur) => total + cur.price * cur.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};
const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id == id);
  if (index == -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};
export {
  shortText,
  searchProduct,
  filterProduct,
  createQueryObject,
  sumProduct,
  productQuantity,
};
