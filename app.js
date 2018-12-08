//app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

//Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://admin:admin1@ds129454.mlab.com:29454/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/products', product);


//Port listener
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});