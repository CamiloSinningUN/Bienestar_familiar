const express = require('express');
const app = express();
require('path');

//Settings 
app.set('port',3000);

//routes
app.set('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'))
})

//listening server
app.listen(app.get('port'),()=>{
    console.log('Sevidor inciado')
})