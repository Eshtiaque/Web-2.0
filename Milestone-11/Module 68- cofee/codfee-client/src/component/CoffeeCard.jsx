// import React from 'react';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, setCoffees, coffees  }) => {
    const { _id ,quantity, name, supplier, taste,
        category, details, photo } = coffee;


const handleDelete= _id=>{
console.log(_id);
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
   
    fetch(`http://localhost:3000/coffee/${_id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
            Swal.fire(
                    'Deleted!',
                    'Your coffee has been deleted.',
                    'success'
                  )
    const remaining =coffees.filter(cof=>cof._id!==_id)
    setCoffees(remaining);
        }
    })
    }
  })
}


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="h-full" src={photo} alt="Movie" /></figure>
                <div className="justify-between flex w-full pr-3 p-2">
                   <div>
                   <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity : {quantity}</p>
                    <p>Supplier : {supplier}</p>
                    <p>Taste : {taste}</p>
                    <p>Category : {category}</p>
                    <p>Details : {details}</p>
            
                   </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-3">
                            <button className="btn bg-pink-500">View</button>
                            <Link to={`updateCoffee/${_id}`}>

                            <button className="btn bg-blue-500 ">Edit</button>
                            </Link>
                            
                            <button onClick={()=>handleDelete(_id)} className="btn bg-yellow-500">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;