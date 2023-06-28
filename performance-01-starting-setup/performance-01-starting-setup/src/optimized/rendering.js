const productListEl = document.getElementById("product-list");

function createElement(product, deleteProductFn) {
  const newListEl = document.createElement("li");
  // const prodTitleEl = document.createElement("h2");
  // const prodPriceEl = document.createElement("p");
  newListEl.innerHTML = `
  <h2>${product.title}</h2>
  <p>${product.price}</p>
  `;
  const prodDeleteButtonEl = document.createElement("button");

  // prodTitleEl.innerHTML = product.title;
  // prodPriceEl.innerHTML = product.price;
  newListEl.id = product.id;
  prodDeleteButtonEl.innerHTML = "DELETE";

  prodDeleteButtonEl.addEventListener(
    "click",
    deleteProductFn.bind(null, product.id)
  );

  // newListEl.appendChild(prodTitleEl);
  // newListEl.appendChild(prodPriceEl);
  newListEl.appendChild(prodDeleteButtonEl);
  return newListEl;
}

export function renderProducts(products, deleteProductFn) {
  productListEl.innerHTML = "";
  const startTime=performance.now();
  products.forEach((product) => {
    productListEl.appendChild(createElement(product, deleteProductFn));
  });
  // for(let i = 0; i < products.length; i++) {
  //   productListEl.appendChild(createElement(products[i], deleteProductFn));
  // }
  const endTime=performance.now();
  console.log(endTime - startTime);
}

export function updatedProducts(product, prodId, deleteProductFn, isAdding) {
  if (isAdding) {
    productListEl.prepend(createElement(product, deleteProductFn));
  } else {
    const productEl = document.getElementById(prodId);
    productEl.remove();
  }
}
