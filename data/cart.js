export const cart  = [];

export function addToCart(productId, productQuantity) {
    let matchingProduct;
    // checking if product already exists in cart
    cart.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingProduct = cartItem;
      }
    });
  
    if (matchingProduct) {
      matchingProduct.productQuantity += productQuantity;
    } else {
      cart.push({
        productId,
        productQuantity,
      });
    }
  };