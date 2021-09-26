const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
const app = express();

const indiceRoutes = require('./routes/indice');
const padreRoutes = require('./routes/padre');
const hijoRoutes = require('./routes/hijo');
const { urlencoded } = require('body-parser');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//midlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password: '123456',
    port: 3306,
    database: 'bienestar'
}, 'single'))
app.use(express.urlencoded({extended: false}));

//routes
app.use('/',indiceRoutes);
app.use('/',padreRoutes);
app.use('/',hijoRoutes);

app.use(express.static(__dirname + '/views/styles/'));

//starting server
app.listen(app.get('port'),()=>{
    console.log('Sevidor inciado')
})