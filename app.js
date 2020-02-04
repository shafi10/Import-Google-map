const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://shafi:shafi100@ds229078.mlab.com:29078/map')
.then(()=>{
    console.log('Connect to the database')
})

const map = require('./controllers/mapController')


app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use(map);


app.listen(3000, ()=>{
    console.log('server running on port 3000')
})