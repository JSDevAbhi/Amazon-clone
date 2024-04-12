export let cart  = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  productQuantity: 2,
},
{
 productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
 productQuantity: 1 
}];

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

export function removeFromCart(productId) {
  let newCart = [];

  cart.forEach((cartItem)=>{
     if(cartItem.productId !== productId){
       newCart.push(cartItem);
     }
  })
  cart = newCart;
}