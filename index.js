// npm run dev
import express from 'express'
import mongoose from 'mongoose'
import router from './routes/productRoutes.js'

// const Product = require('./models/productModel');

const app = express()


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Hello World')
})

// routes
app.use('/api/products', router);


// db config
mongoose.connect("MONGO DB URL PASTE HERE")
.then(()=>{
    console.log("Connected to DB")
    app.listen(3000, ()=>console.log(`running on 3000`));

})
.catch(()=>{
    console.log("connection failed")
})




