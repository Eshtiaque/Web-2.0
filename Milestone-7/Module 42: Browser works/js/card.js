const addProduct=()=>{
    const productField =document.getElementById('product-name')
    const quantityField =document.getElementById('product-quantity')
    const product =productField.value;
    const quantity =quantityField.value;
    productField.value =' ';
    quantityField.value =' ';
    console.log(product,quantity);
    displayFunction(product,quantity);
    saveProductToLocalStorage(product,quantity);
}
const displayFunction=(product,quantity)=>{
    const ul =document.getElementById('product-container');
    const li=document.createElement('li');
     li.innerText=`${product}:${quantity}`;
    ul.appendChild(li);
}
const getStoredShoppingCart =()=>{
    const storedCard =localStorage.getItem('cart');
    let cart ={};
    if(storedCard){
        cart =JSON.parse(storedCard);
    }
    return cart;
}

const saveProductToLocalStorage =(product,quantity) =>{
    const cart =getStoredShoppingCart();
    cart[product]=quantity;
    const cartStringified =JSON.stringify(cart);
    console.log(cartStringified);
    localStorage.setItem('cart',cartStringified);
}

const displayProductFromLocalStorage=()=>{
    const savedCart =getStoredShoppingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity =savedCart[product];
        console.log(product,quantity);
        displayFunction(product,quantity);
    }
}
displayProductFromLocalStorage();