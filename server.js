const express = require("express"),
    mongo = require("mongodb").MongoClient,
    app = express();
    // API = require("./API");

// app.use("./API.js", API)

app.post('/trip', (req, res) => { /* */ })
app.get('/trips', (req, res) => { /* */ })
app.post('/expense', (req, res) => { /* */ })
app.get('/expenses', (req, res) => { /* */ });

app.listen(3000, () => console.log("🌎 ==> API server now live!"))