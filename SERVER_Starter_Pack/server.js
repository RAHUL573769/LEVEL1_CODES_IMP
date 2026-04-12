const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const port = 3000;

const server = async () => {
  try {
    const client = new MongoClient(process.env.DB_URL);

    await client.connect(); // ✅ CONNECT FIRST
    console.log("✅ DB Connected");

    const db = client.db("project4");
    const productCollection = db.collection("products");

    // ✅ API route
    app.get("/products", async (req, res) => {
      try {
        const data = await productCollection.find().toArray();
        res.send(data);
      } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching data");
      }
    });

    // ✅ Start server
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });

  } catch (error) {
    console.log("❌ Error:", error);
  }
};

server();