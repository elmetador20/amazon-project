export let cart;
loadFromStorage();
export function loadFromStorage(){
 cart= JSON.parse(localStorage.getItem('cart'));



if(!cart){
  cart=
  [{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2,
    deliveryOptionId:'1'
  
  },{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1,
    deliveryOptionId:'2'
  }];
}
}

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));

}

export function addToCart(productId){
  let matchingItem;
  cart.forEach((item)=>{
    if(productId===item.productId){
      matchingItem=item;

    }
  });
  if(matchingItem){
    matchingItem.quantity+=1;
  }
  else{
    cart.push({
      productId: productId,
      quantity: 1,
    deliveryOptionId:'1'
    });
  }

  saveToStorage();
}
//window.addToCart = addToCart; one way to globally declare function
export function removeFromCart(productID){
 const newCart=[];
 cart.forEach((cartItem) =>{
  if(cartItem.productId !== productID){
    newCart.push(cartItem);
  }

 });
 cart=newCart;
  
 saveToStorage();
}