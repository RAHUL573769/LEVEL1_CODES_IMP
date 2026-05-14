import express from "express";

const app = express();

// Middleware
app.use((req, res, next) => {
    console.log("Middleware Running");
    next();
});

// Routes
app.get("/", (req, res) => {
    res.send("Home Route Working");
});

app.get("/profile", (req, res) => {
    res.send("Champions");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Error Done");
});

// Server
app.listen(3000, () => {
    console.log("Server is Running on Port 3000");
});