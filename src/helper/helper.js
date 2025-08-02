/* eslint-disable no-unused-vars */
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
export { shortText, searchProduct, filterProduct, createQueryObject };
