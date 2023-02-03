var shoppingCart={
    books:3,
    sunglass : 2,
    keyboard : 1,
    mouse : 1,
    pen :25,
}
//when you know the specific property name ,use dot notiatin to get the property value
var penCount = shoppingCart.pen;
//alternative
var penCount2 =shoppingCart['pen'];
//other
var propertyName ='mouse';
var propertyValues =shoppingCart[propertyName];
console.log(propertyName ,propertyValues);
//////////////////////////////////
var properties =Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);

// set property values
shoppingCart.mouse=15;
console.log(shoppingCart);
//other
shoppingCart['mouse']=15;
console.log(shoppingCart);
//other
var propertyName ='mouse';
shoppingCart[propertyName] =89;
console.log(shoppingCart);