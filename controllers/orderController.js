const productModel = require("../models/productmodel");
const userModel = require("../models/userModel");
const categoryModel= require("../models/categoryModel")
const orderModel= require("../models/orderModel")
const fs = require("fs")
const slugify = require("slugify");


 const addorderController = async (req, res) => {
  try {
    
    const {product,userId} =req.body;
    console.log(userId)
  const orderdata = await orderModel.findOne({ buyer: userId });
    console.log("bbbbbbbbbb");
    let productList=[];
  
    if(orderdata){
      orderdata.products.map((p)=>{
      productList.push(p);
     });
  
    
       product.map((p)=>{
        productList.push(p);
      
       })
     
      const order = await orderModel.findByIdAndUpdate(
        orderdata._id,
        {
         buyer:userId,
         products:productList
        },
        { new: true }
      );
    }
    else{
    const order = new orderModel({ buyer:userId});
     product.map((p)=>{
      order.products.push(p);
     })
    
    await order.save();
    }
    res.status(201).send({
      success: true,
      message: "Order Created Successfully",
      
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in order",
    });
  }
};


module.exports={addorderController}
