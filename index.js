require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Database connection string
const DB = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.gh2gmbk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

//Database connection setup through mongoose 
mongoose.connect(DB).then(() => {
    console.log("Database connected successfully");
}).catch(() => {
    console.log("Database connection fail");
});



//Here Server is listening
const PORT = process.env.PORT || 4000; 
app.listen(PORT, ()=>{
    console.log(`server is listening on port : ${PORT}`)
});