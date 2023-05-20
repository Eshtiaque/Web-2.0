// import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const photo = form.photo.value ;
        const details = form.details.value;
       
const newCoffee = { quantity, name, supplier, taste,
     category ,details,photo}  
        console.log(newCoffee);
        //send data to the server
        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedID){
                    Swal.fire({
                        title: 'Success',
                        text: 'User Added a successfully',
                        icons: 'success',
                        confirmButtonText: 'Cool',
                       
                    })
                }
            })

    }
    return (
        <div className="bg-[#F4F3F0] p-24" >
            <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* name and quantity */}
                <div className="md:flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
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
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <span>Taste</span>
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
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
                            <input type="text" name="category" placeholder="Category Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Details</span>
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
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
                            <input type="text" name="photo" placeholder="Photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Coffee" className="btn btn-accent mt-2 md:w-full" />
            </form >
        </div >
    );
};

export default AddCoffee;