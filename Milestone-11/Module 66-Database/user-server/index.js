const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middle ware
app.use(cors());
//for showing body
app.use(express.json());

const users = [
    { name: "John", id: 1, email: "john@example.com" },
    { name: "Jane", id: 2, email: "jane@example.com" },
    { name: "Bob", id: 3, email: "bob@example.com" }
  ];


app.get ('/',(req,res)=>{
    res.send('user management server is running')
});
app.get ('/users',(req,res)=>{
    res.send(users);
});
//create a post api on the server side.
app.post ('/users',(req,res)=>{
    console.log('Api Hitting.....')
    console.log(req.body);
    const newUser =req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
});

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})