const addToDb = id => {
    let shoppingCart = {};
    //get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1; shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-Cart', JSON.stringify(shoppingCart));

}
//remove item from the shopping cart
const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-Cart', JSON.stringify(shoppingCart));

        }
    }
}
const deleteShoppingCart =()=>{
    localStorage.removeItem('shoppingCart');
}

export { addToDb ,
     removeFromDb ,
    deleteShoppingCart //need call for delete 
    }
























// const addToDb=id=>{
//     const quantity =localStorage.getItem(id)
//     if(quantity){
//         // localStorage.setItem(id,1);
//         const newQuantity = parseInt(quantity)+1;
//         localStorage.setItem(id,newQuantity);
//     }
//     else{
//     localStorage.setItem(id,1);
//     }
// }
// export {addToDb}