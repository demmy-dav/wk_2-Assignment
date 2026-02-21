require("dotenv").config() //load env vars from the .env file


// Creating the express server
const express = require("express")
const app = express()
const PORT = process.env.PORT
const path = require("path")

// app.get("/", (req, res) => {
//     res.send("My Week 2 API! ")
// });

app.use(express.json()) // Middleware to parse JSON bodies in incoming requests

app.post("/user", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) { return res.status(400).json({ error: "The Name and Email are required." }) }

    res.status(201).json({ message: `Hello ${name}!` });


})


app.get("/user/:id", (req, res) => {

    const id = req.params.id;
    res.json({ message: `User ${id} profile` });
});


app.use(express.static(path.join(__dirname)))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(PORT, () => {
    console.log(`Express Server running on http://localhost:${PORT}`);
});