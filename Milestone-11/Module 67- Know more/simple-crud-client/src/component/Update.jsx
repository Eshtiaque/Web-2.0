import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser =useLoaderData();
    const handleUpdate = event=>{
        event.preventDefault();
        const form=event.target;
        const name = form.name.value;
        const email = form.email.value;
        const update = { name, email }
        console.log(update);
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers:{
                'content-type':'application/json'

            },
            body:JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Update Successfully');
                }
            })
    }
    return (
        <div>
            <h3>Update Information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
        <input type="name" name='name' defaultValue={loadedUser?.name} id='' />
        <br />
        <input type="email" name='email'defaultValue={loadedUser?.email} id='' />
        <br />
        <input type="submit" name='Add User' id='' />
      </form>
        </div>
    );
};

export default Update;