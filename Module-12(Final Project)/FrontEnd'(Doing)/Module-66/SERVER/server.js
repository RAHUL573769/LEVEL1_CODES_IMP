// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Initialize dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT

// Middlewares
app.use(cors());               // enable CORS for all origins
app.use(express.json());       // parse JSON body

// Routes
app.get("/", (req, res) => {
    res.send("Parcel Delivery API is running 🚀");
});

// Example: health check
app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date() });
});

// MongoDB connection

const uri = process.env.MONGODB_LOCAL
console.log(uri)
const client = new MongoClient(uri, {
    serverApi: {

        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client
        await client.connect();


        const database = client.db("parcelDb")
        const parcelCollection = database.collection("parcel")
        app.get("/parcels", async (req, res) => {
            const parcel = await parcelCollection.find().toArray()
            res.send(parcel)
        })

        //
        app.get('/parcels', async (req, res) => {
            const query = {}
            const { email } = req.query;
            // /parcels?email=''&
            if (email) {
                query.senderEmail = email;
            }

            const options = { sort: { createdAt: -1 } }

            const cursor = parcelsCollection.find(query, options);
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/parcels/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await parcelsCollection.findOne(query);
            res.send(result);
        })
        app.post("/parcels", async (req, res) => {
            try {
                const newParcel = req.body
                const result = await parcelCollection.insertOne(newParcel)
                res.status(200).send(result)

            } catch (error) {
                console.log(error)
                res.status(500).send("Error")
            }
        })

        // Ping the database
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        console.log(err); // fixed catch syntax
    }
}

run().catch(console.dir);


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});