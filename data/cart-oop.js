export const cart = {
  cartItems: undefined,

  loadFormStorage() {
    this.cartItems = JSON.parse(localStorage.getItem("cart-oop"));

    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          productQuantity: 2,
          delivaryOptionId: "1",
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          productQuantity: 1,
          delivaryOptionId: "2",
        },
      ];
    }
  },

  saveToLocalStorage() {
    localStorage.setItem("cart-oop", JSON.stringify(this.cartItems));
  },

  addToCart(productId, productQuantity) {
    let matchingProduct;
    // checking if product already exists in cart
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingProduct = cartItem;
      }
    });

    if (matchingProduct) {
      matchingProduct.productQuantity += productQuantity;
    } else {
      this.cartItems.push({
        productId,
        productQuantity,
        delivaryOptionId: "1",
      });
    }
    // updating the cart
    this.saveToLocalStorage();
  },

  removeFromCart(productId) {
    let newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
    this.cartItems = newCart;
    // updating the cart
    this.saveToLocalStorage();
  },

  updateCartQuantity() {
    let cartQuantiy = 0;

    this.cartItems.forEach((cartItem) => {
      cartQuantiy += cartItem.productQuantity;
    });
    if (!document.querySelector(".js-cart-quantity")) {
      return cartQuantiy;
    }
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantiy;
  },

  updateDelivaryOption(productId, delivaryOptionId) {
    let matchingProduct;
    // checking if product already exists in cart
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingProduct = cartItem;
      }
    });
    matchingProduct.delivaryOptionId = delivaryOptionId;

    this.saveToLocalStorage();
  },
};

cart.loadFormStorage();
