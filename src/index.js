const express = require('express');
const app = express();
require('path');

app.set('port',3000);

app.set('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'))
})

app.listen(app.get('port'),()=>{
    console.log('Sevidor inciado')
})