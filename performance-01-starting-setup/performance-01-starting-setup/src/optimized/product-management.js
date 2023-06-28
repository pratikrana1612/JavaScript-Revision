import { renderProducts, updatedProducts as updatedProd } from "./rendering";
import { products as prods } from "./products";

let products = prods;
const titleEl = document.getElementById("#title");
const priceEl = document.getElementById("#price");


export function initProducts() {
  renderProducts(products, deleteProduct);
}

export function deleteProduct(prodId) {
  const deleteProductIndex = products.findIndex(prod => prod.id === prodId);
  const deleteProduct = products.splice(deleteProductIndex, 1)[0];
  // const updatedProducts = [];
  // let deleteProduct;
  // for (const prod of products) {
  //   if (prod.id !== prodId) {
  //     updatedProducts.push(prod);
  //   } else {
  //     deleteProduct = prod;
  //   }
  // }
  // products = updatedProducts;
  updatedProd(deleteProduct, prodId, deleteProduct, false);
}

export function addProduct(event) {

  const title = titleEl.value;
  const price = priceEl.value;

  if (title.trim().length === 0 || price.trim().length === 0 || +price < 0) {
    alert("Please enter some valid input values for title and price.");
    return;
  }

  const newProduct = {
    id: new Date().toString(),
    title: title,
    price: price,
  };

  products.unshift(newProduct);
  updatedProd(newProduct, newProduct.id, deleteProduct, true);
}
