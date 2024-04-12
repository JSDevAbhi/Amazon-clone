
let productsHTML = '';  // accumulator method 


products.forEach((product) => {
    productsHTML += `<div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents/100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class="js-quantity-selector-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart js-added-to-cart-${product.id}">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>
     `;
})

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart-button').forEach((AddToCartBtn)=>{
  AddToCartBtn.addEventListener('click', ()=>{
    const {productId} = AddToCartBtn.dataset;
    const productQuantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
    const addedToCartmsgEL = document.querySelector(`.js-added-to-cart-${productId}`);
    addedToCartmsgEL.classList.add('visible');
    const msgId = setTimeout(() =>{
      addedToCartmsgEL.classList.remove('visible');
    },  2000);
    
    let matchingProduct;
    // checking if product already exists in cart 
    cart.forEach((cartItem)=>{
      if(cartItem.productId === productId){
        matchingProduct = cartItem;
      }
    })

    if(matchingProduct){
      matchingProduct.productQuantity += productQuantity;
    }else{
       cart.push({
        productId,
        productQuantity,
      });
    }
    
    let cartQuantiy = 0;

    cart.forEach((cartItem)=>{
      cartQuantiy += cartItem.productQuantity;
    })
    
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantiy;
  })
})