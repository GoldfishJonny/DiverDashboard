const express=require('express');
const { MongoClient } = require("mongodb");
require('dotenv').config()

const app=express();

const port=5000;

const uri = process.env.CONNECTION_STRING;
console.log(uri);
const client = new MongoClient(uri);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

