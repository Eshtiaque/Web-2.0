import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const handleUserAdd = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user);

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          alert ('Users added successfully')
          form.reset();
        }
      })
  }

  return (
    <>


      <h1>Simple CRUD</h1>
      <form onSubmit={handleUserAdd}>
        <input type="name" name='name' id='' />
        <input type="email" name='email' id='' />
        <input type="submit" name='Add User' id='' />
      </form>
    </>
  )
}

export default App