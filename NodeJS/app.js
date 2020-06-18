//import express
const express = require('express');
//express() method to create express app
const app = express();

app.use((req,res)=>{
    res.json({message: 'votre requête sur application express fonctionne'})
})

module.exports = app;