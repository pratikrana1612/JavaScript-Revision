// import { initProducts } from './product-management';
import { products } from "./products";
import { renderProducts } from "./rendering";

const addProduct = (event) => {
  event.preventDefault();
  import("./product-management.js").then((mod) => {
    mod.addProduct();
  });
};
const deleteProduct = (productId) => {
  import("./product-management.js").then((mod) => {
    mod.deleteProduct(productId);
  });
};
const addProductForm = document.getElementById("new-product");

function initProducts() {
  renderProducts(products, deleteProduct);
}
initProducts();

addProductForm.addEventListener("submit", addProduct);
