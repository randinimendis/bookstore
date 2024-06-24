
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/book-routes')
const route=require("./routes/book-routes")

const app = express()
//meddlewares 
app.use(express.json());
app.use("/books",router)//locallhost:5000/books


  .then(() => console.log("Connected to database"))
  .then(() =>{app.listen(5000);
})
.catch((err)=> console.log(err));
