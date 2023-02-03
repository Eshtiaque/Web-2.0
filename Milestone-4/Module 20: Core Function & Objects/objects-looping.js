var shoppingCart={
    books:3,
    sunglass : 2,
    keyboard : 1,
    mouse : 1,
    pen :25,
    shoes :2
}
const keys=Object.keys(shoppingCart);
console.log(keys);
const values=Object.values(shoppingCart);
console.log(values);

for(var i=0; i<keys.length; i++){
    console.log(keys[i])
}

for(var i=0; i<keys.length; i++){
    var propertyName =keys [i];
    var propertyValues =shoppingCart[propertyName];
    console.log(propertyName,propertyValues);
}
//for in loop
for (var propertyName in shoppingCart){
    console.log (propertyName);
    const value = shoppingCart [propertyName];
    console.log (value);
}