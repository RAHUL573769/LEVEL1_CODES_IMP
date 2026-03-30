// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require('mongodb');

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