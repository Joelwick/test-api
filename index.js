const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
let allProducts = [
    {name:"Five Ten", product_name:"Shoe",price:"$5000",color:"green ash",brand:"Adidas",id:"1"},
    {name:"Iphone 14 pro max ", product_name:"Mobile Phone",price:"$3900",color:"sky blue",brand:"Apple",id:"2"},
    {name:"white polo for Male", product_name:"Cloth",price:"$2000",color:"white",brand:"offWhite",id:"3"},
    {name:"Manchester united  jersey for Male", product_name:"Cloth",price:"$1500",color:"blue and grey camo",brand:"nike",id:"4"},
    {name:"Short gown ", product_name:"Cloth",price:"$1100",color:"white and red",brand:"Gucci",id:"5"},
    {name:"Dell latitude E6330", product_name:"Laptop",price:"$3250",color:"silver black",brand:"Dell",id:"6"},
    {name:"AMD ryzen", product_name:"Processor",price:"$780",brand:"AMD",id:"7"},
    {name:"Intel core i7", product_name:"Processor",price:"$500",brand:"Intel",id:"8"},
    {name:"acer T3340", product_name:"Laptop",price:"$2150",color:"red",brand:"acer",id:"9"},
    {name:"nike airJordan", product_name:"Shoe",price:"$1000",color:"blue",brand:"nike",id:"10"},
    {name:"Developer bag", product_name:"Bag",price:"$900",color:"grey",brand:"offWhite",id:"11"},
    {name:"black silver 218", product_name:"Wrist Watch",price:"$500",color:"silver black",brand:"rolex",id:"12"}
]
app.get("/products",(req,res)=>{
    res.send({allProducts})
})
app.get("/products/:id",(req,res)=>{
    console.log(req.params.id)
    let singleProduct = allProducts.find((product)=>product.id==req.params.id)
    res.status(200).json({singleProduct})
})
app.listen(4000,()=>{
    console.log("it has started already")
})