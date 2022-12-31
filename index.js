const { request } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/Router/StudentRoute');
const app= express();

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/practice").then(()=> console.log("successfully connected")).catch((error)=> console.log(error));
app.use("/", router);


app.listen(8080, ()=> console.log("port is listing at 8080"));