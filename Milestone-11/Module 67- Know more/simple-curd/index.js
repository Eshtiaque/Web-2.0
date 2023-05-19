const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//estahmed111
//NpuQ2WGdYQaifoDG
// tJ5f6MN5g8JcBB1j

const uri = "mongodb+srv://estahmed111:tJ5f6MN5g8JcBB1j@cluster0.eeu0ppt.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("usersDB");
    const userCollection = database.collection("users");
    //const database = client.db("usersDB").collection('users');

    app.get('/users', async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);

    })
    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId (id) };
      const user = await userCollection.findOne(query);
      res.send(user);

    })

    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log('New User', user)
      const result = await userCollection.insertOne(user);
      res.send(result);

    })


    app.put('/users/:id', async (req, res) => {
      const id = req.params.id;
      const User = req.body;
      console.log(id,User);
      const filter = { _id: new ObjectId (id) };
      const option = {upsert :true};
      const updateUser ={
      $set:{
          name: User.name,
          email: User.email
      }
      }
      const result = await userCollection.updateOne(filter , updateUser, option);
      res.send(result);

    })

    app.delete('/users/:id',async(req,res)=>{
      const id = req.params.id;
      console.log('please id from database',id)
      const query = { _id: new ObjectId (id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('SIMPLE CURD IS RUNNING')
})
app.listen(port, () => {
  console.log(`simple curd is running on port ${port}`)
})