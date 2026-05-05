const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { mongoose } = require("mongoose")

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
app.use(cors())
require('dotenv').config()
app.use(express.json())
const port =  3000










const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://localhost:27017/zapShift";
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
    // Send a ping to confirm a successful connection
      await client.db("zapshiftDb").command({ ping: 1 });
const db = client.db("zapshiftDb");
      const parcelCollection = db.collection("parcels");


    app.get("/", (req, res) => {
    res.send("Zap is shifting")
})

    app.get("/parcels", async (req, res) => {
      const query = {}
      const { email } = req.query;
      if (email) {
        query.senderEmail=email
      }
      const cursor = parcelCollection.find(query)
      const result=await cursor.toArray()
      res.send(result)
    })
      app.post("/parcels", async (req, res) => {
          const parcel = req.body
          const result = await parcelCollection.insertOne(parcel)
          res.send(result)
      })
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





// const server = () => {
// try {
//     mongoose.connect("mongodb://localhost:27017")


//     app.get("/", (req, res) => {
//     res.send("Zap is shifting")
// })
// app.listen(port, () => {
//     console.log("expale")
// })

// } catch (error) {

//     console.log(error)
// }
// }

// server()
