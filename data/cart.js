export let cart  =  JSON.parse(localStorage.getItem('cart'));

if (!cart){
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    productQuantity: 2,
    delivaryOptionId: '1'
  },
  {
   productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
   productQuantity: 1 ,
   delivaryOptionId: '2'
  }];
  
}



const saveToLocalStorage = () => {
   localStorage.setItem('cart', JSON.stringify(cart));
}

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
        delivaryOptionId : '1'
      });
    }
    // updating the cart
    saveToLocalStorage();
  };

export function removeFromCart(productId) {
  let newCart = [];

  cart.forEach((cartItem)=>{
     if(cartItem.productId !== productId){
       newCart.push(cartItem);
     }
  })
  cart = newCart;
  // updating the cart
  saveToLocalStorage();
}

export function updateCartQuantity() {
  let cartQuantiy = 0;

  cart.forEach((cartItem) => {
    cartQuantiy += cartItem.productQuantity;
  });
  if(!document.querySelector(".js-cart-quantity")){
    return cartQuantiy;
  }
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantiy;
}

export function updateDelivaryOption(productId, delivaryOptionId){
  let matchingProduct;
    // checking if product already exists in cart
    cart.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingProduct = cartItem;
      }
    });
  matchingProduct.delivaryOptionId = delivaryOptionId;

  saveToLocalStorage();
}