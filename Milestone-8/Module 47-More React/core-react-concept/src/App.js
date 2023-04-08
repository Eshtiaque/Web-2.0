// import logo from './logo.svg';
// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

// function App() {
// const products=[
//   {name:'Laptop' ,Price:'500000'},
// {name:'Watch' ,Price:'500000'},
// {name:'Phone' ,Price:'500000'},
// {name:'Camera' ,Price:'500000'}
// ]

//   return (
//     <div className="App">
//      {
//       products.map(product=><Product name={product.name} Price ={product.Price}></Product>)
//      } 
//     {/* /* <Products name="Laptop" Price="500000"></Products>
//     <Products name="Phone" Price="100000"></Products>
//     <Products name="Watch" Price="40000"></Products> */}
//     </div>
//   );
// }

// function Product(props){
//   return(
//     <div className='Product'>
//       <h3>Name : {props.name}</h3>
//       <p>Price : {props.Price}</p>
//     </div>
//   )
// }
// function App() {

//     return (
//       <div className="App">
//       <Counter></Counter>
//       </div>
//     );
//   }

//   function Counter(){
//     const [count , setCount] =useState(999);

//     const increaseCount =()=>setCount(count+1);
//     // const increaseCount =()=>{
//     //   const newCount = count +1;
//     //   setCount(newCount);
//     // }

//     const decreaseCount =()=>setCount(count-1);
//      // const decreaseCount =()=>{
//     //   const newCount = count -1;
//     //   setCount(newCount);
//     // }
//     return(
//       <div className='Product'>
//         <h1>Count :{count} </h1>
//         <button onClick={increaseCount}>Increase</button>
//         <button onClick={decreaseCount}>Decrease</button>
//       </div>
//     )
//   }
function App() {

  return (
    <div >
      <ExternalUser></ExternalUser>
      {/* <simpleUser></simpleUser> */}
    </div>
  )

  function ExternalUser() {
    const [users, setUsers] = useState([])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);
    return (
      <div className='Product'>
        <h1>External Users : </h1>
        <h3>List: {users.length}</h3>
        {
          users.map(user => <User 
            name={user.name} 
            email={user.email} 
            city ={user.address.city} 
            phone={user.phone} 
            website={user.website}>

            </User>)
        }

      </div>
    )
  }
  function User(props) {
    return (
      <div style={{ border: '2px solid', margin: '3px' }}>
        <h3>Name:{props.name}</h3>
        <p>Email: {props.email}</p>
        <p>City: {props.city}</p>
        <p>Phone: {props.phone}</p>
        <p>Website: {props.website}</p>
      </div>
    )
  }

}
export default App;
