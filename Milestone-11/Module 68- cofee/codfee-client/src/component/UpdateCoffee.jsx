// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee =useLoaderData();
    const { _id ,quantity, name, supplier, taste,
        category, details, photo } = coffee;


            const handleUpdateCoffee = event => {
                event.preventDefault();
        
                const form = event.target;
        
                const name = form.name.value;
                const quantity = form.quantity.value;
                const supplier = form.supplier.value;
                const taste = form.taste.value;
                const category = form.category.value;
                const photo = form.photo.value ;
                const details = form.details.value;
               
        const updatedCoffee = { quantity, name, supplier, taste,
             category ,details,photo}  
                console.log(updatedCoffee);
                //send data to the server
                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedCoffee)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.modifiedCount >0){
                            Swal.fire({
                                title: 'Success',
                                text: 'coffee updated successfully',
                                icons: 'success',
                                confirmButtonText: 'Cool',
                               
                            })
                        }
                    })
        
            }
        



    return (
        
        <div className="bg-[#F4F3F0] p-24" >
            <h2 className="text-3xl font-extrabold">Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* name and quantity */}
                <div className="md:flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" name="quantity" defaultValue={quantity}placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* supply and taste */}
                <div className="md:flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <span>Supplier</span>
                            <input type="text" name="supplier" defaultValue={supplier}placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <span>Taste</span>
                            <input type="text" name="taste" defaultValue={taste}placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* category and details */}
                <div className="md:flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category
                            </span>
                        </label>
                        <label className="input-group">
                            <span>Category</span>
                            <input type="text" name="category" defaultValue={category}placeholder="Category Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Details</span>
                            <input type="text" name="details" defaultValue={details}placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* last photo */}
                <div className="md:flex gap-3">
                    <div className="form-control  md:w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <span>Photo</span>
                            <input type="text" name="photo" defaultValue={photo}placeholder="Photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Update Coffee" className="btn btn-accent mt-2 md:w-full" />
            </form >
        </div >
    );
};

export default UpdateCoffee;