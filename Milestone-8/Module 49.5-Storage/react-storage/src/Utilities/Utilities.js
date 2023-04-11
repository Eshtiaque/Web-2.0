const Done =(first,second)=>{
 return first /second;
}

const multiply =(first,second)=>{
  return first * second ;
}

//reduce 
const numbers =[10,20,34,50,38.45]
const sumReducer=(previous,current)=>previous+current;
const totalNumber=numbers.reduce(sumReducer,0)

//reduce object
const items=[
    {
        id: 43753756327561,
        name: "Product 1",
        price: 9.99
      },
      {
        id: 43753756327562,
        name: "Product 2",
        price: 14.99
      },
      {
        id: 43753756327563,
        name: "Product 3",
        price: 19.99
      }
    ]
const itemSumReduce =(previous,current) =>(previous+ current.price );
    const itemTotal =items.reduce(itemSumReduce,0);
   

const getTotalPrice= products=>{
    const reducer=(previous,current) =>(previous+ current.price );
    const total =products.reduce(reducer,0);
    return total;
}

export{Done,
         multiply,
            getTotalPrice as getTotal
}