const express = require('express');
const cors = require('cors');
const con = require('./DataBase/DataBase');
con();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to my chat app</h1>`);
})


app.listen(5000,()=>console.log("http://localhost:5000"));