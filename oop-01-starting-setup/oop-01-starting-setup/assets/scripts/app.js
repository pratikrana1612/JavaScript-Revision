class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrNmae, attrValue) {
    this.name = attrNmae;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderhookId, shouldRender = true) {
    this.renderhookId = renderhookId;
    if (shouldRender) {
      this.render();
    }
    console.log("calls");
  }
  render() {}
  createRootElement(tag, className, attributes) {
    const rootElement = document.createElement(tag);
    if (className) {
      rootElement.classList.add(className);
    }
    if (attributes && attributes.length > 0) {
      attributes.forEach((attr) => {
        rootElement.setAttribute(attr.name, attr.value);
      });
    }

    document.getElementById(this.renderhookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];
  constructor(renderhookId) {
    super(renderhookId);
    this.orderProducts = () => {
      console.log("Order Products...");
      console.log(this.items);
    };
  }
  get totalAmount() {
    const sum = this.items.reduce((sum, item) => sum + item.price, 0);
    return sum;
  }
  set cartItems(value) {
    this.items = value;
    this.h2.innerHTML = `<h2>Total:\$${this.totalAmount.toFixed(2)}</h2>`;
  }
  addToProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
    // this.items.push(product);
  }
 

  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
      <h2>Total:\$${0}</h2>
      <button>Order Now!</button>
    `;
    const orderButton = cartEl.querySelector("button");
    orderButton.addEventListener("click", this.orderProducts);
    this.h2 = cartEl.querySelector("h2");
    cartEl.classList.add("cart");
    // return cartEl;
  }
}

class ProductItem extends Component {
  constructor(product, renderhookId) {
    super(renderhookId, false);
    console.log(this);
    this.product = product;
    this.render();
  }

  addToCart() {
    // console.log("Adding Product to cart...");
    App.addProductToCart(this.product);
    console.log(this.product);
  }
  render() {
    const li = this.createRootElement("li", "product-item");
    // const li = document.createElement("li");
    // li.classList.add();
    li.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}" >
                    <div class="product-item__content">
                        <h2>${this.product.title}</h2>
                        <h3>\$${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
    const addCartButton = li.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    // return li;
  }
}

class ProductList extends Component {
  products = [];

  constructor(renderhookId) {
    super(renderhookId);
  }
  fetchProducts() {
    this.products = [
      new Product(
        "A Pilow",
        "https://images.pexels.com/photos/776120/pexels-photo-776120.jpeg?auto=compress&cs=tinysrgb&w=600",
        "A soft pilow",
        19.99
      ),
      new Product(
        "A carpet",
        "https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FycGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "A carpet that you like - or not",
        29.99
      ),
    ];
  }
  render() {
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
    this.fetchProducts();
    // const ul = document.createElement("ul");
    // ul.id="prod-list"
    // ul.classList.add("product-list");
    for (const prod of this.products) {
      const product = new ProductItem(prod, "prod-list");
      // product.render();
      // ul.append(productItem.render());
    }
    // return ul;
    // renderhook.append(ul);
  }
}

class Shop {
  static render() {
    // const renderhook = document.getElementById("app");
    this.cart = new ShoppingCart("app");
    // this.cart.render();
    // console.log(new Product());
    const productList = new ProductList("app");
    // productList.render();
  }
}

class App {
  static init() {
    Shop.render();
    this.cart = Shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addToProduct(product);
  }
}
App.init();
