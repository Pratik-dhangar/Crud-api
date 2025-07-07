// npm run dev
import express from 'express'
import mongoose from 'mongoose'
import Product from './models/productModel.js'

// const Product = require('./models/productModel');

const app = express()


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/api/products', async(req, res)=>{
try {
   const product = await Product.create(req.body);
   res.status(200).json(product);
} catch (error) {
    res.status(500).json({message: error.message})
}
})
app.get('/api/products', async(req, res)=>{
try {
   const products = await Product.find({});
   res.status(200).json(products);
} catch (error) {
    res.status(500).json({message: error.message})
}
})

app.get('/api/product/:id', async(req, res)=>{
    try {
        const {id} = req.params;
       const product= await Product.findById(id);
       res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// update
app.put('/api/product/:id', async (req, res) => {
    try {
        const {id} = req.params;

       const product = await Product.findByIdAndUpdate(id, req.body);

       if(!product){
        res.status(500).json({message: "product not found"})
       }

       const updatedProduct = await Product.findById(id);
       res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete
app.delete('/api/product/:id', async (req, res) => {
    try {
        const {id} = req.params;

       const product = await Product.findByIdAndDelete(id, req.body);

       if(!product){
        res.status(500).json({message: "product not found"})
       }

         res.status(200).json({message:"Product deleted Successfully"});
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.connect("mongodb+srv://dhangarpratik5077:eT0ZFZu43z1bLm26@backend.t2or5db.mongodb.net/basic-crud?retryWrites=true&w=majority&appName=backend")
.then(()=>{
    console.log("Connected to DB")
    app.listen(3000, ()=>console.log(`running on 3000`));

})
.catch(()=>{
    console.log("connection failed")
})




