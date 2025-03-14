const cart={
 cartItems: undefined,

  loadFromStorage:function(){
 this.cartItems= JSON.parse(localStorage.getItem('cart-oop'));
 
 
 
 if(!this.cartItems){
   this.cartItems=
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
 },




  saveToStorage(){
  localStorage.setItem('cart-oop',JSON.stringify(this.cartItems));

},

 addToCart(productId){
  let matchingItem;
  this.cartItems.forEach((item)=>{
    if(productId===item.productId){
      matchingItem=item;

    }
  });
  if(matchingItem){
    matchingItem.quantity+=1;
  }
  else{
    this.cartItems.push({
      productId: productId,
      quantity: 1,
    deliveryOptionId:'1'
    });
  }

  this.saveToStorage();
},

 removeFromCart(productID){
  const newCart=[];
  this.cartItems.forEach((cartItem) =>{
   if(cartItem.productId !== productID){
     newCart.push(cartItem);
   }
 
  });
  this.cartItems=newCart;
   
  this.saveToStorage();
 }

};

cart.loadFromStorage();



console.log(cart);

//window.addToCart = addToCart; one way to globally declare function