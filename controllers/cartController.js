const productModel = require("../models/productmodel");
const userModel = require("../models/userModel");
const categoryModel= require("../models/categoryModel")
const orderModel= require("../models/orderModel")
const cartModel= require("../models/cartModel")
const fs = require("fs")
const slugify = require("slugify");


 const addcartController = async (req, res) => {
  try {
    const {product,userId} =req.body;
    console.log(product);
    console.log(userId)
  const orderdata = await cartModel.findOne({ buyer: userId });
    let productList=[];
  
    if(orderdata){
      orderdata.products.map((p)=>{
      productList.push(p);
     });
  
    productList.push(product);
      //  product.map((p)=>{
      //   productList.push(p);
      
      //  })
     
      const order = await cartModel.findByIdAndUpdate(
        orderdata._id,
        {
         buyer:userId,
         products:productList
        },
        { new: true }
      );
      order.save();
    }
    else{
   
    productList.push(product)
    const order = new cartModel({ 
      buyer:userId,
      products:productList
    });
    //  product.map((p)=>{
    //   order.products.push(p);
    //  })
    
    await order.save();
    }
    res.status(201).send({
      success: true,
      message: "Cart Created Successfully",
      
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

const getcartController = async (req, res) => {
  try {

    const products = await cartModel
      .find({buyer:req.params.uid})
    res.status(200).send({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error in per page ctrl",
      error,
    });
  }
};

const deletecartitemController = async (req, res) => {
  try {
   
    // const { pid, uid } = req.params;
  const { pid, uid } = req.query;
   
    const cartdata = await cartModel.findOne({ buyer:uid});
    let productList=[];
  
    if(cartdata){
      cartdata.products.map((p)=>{
        console.log(p._id);
        if(p._id!=pid)
      productList.push(p);
     });
   
     const order = await cartModel.findByIdAndUpdate(
      cartdata._id,
      {
       buyer:uid,
       products:productList
      },
      { new: true }
    );
    order.save();

    res.status(200).send({
      success: true
    });

  }
 } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error in per page ctrl",
      error,
    });
  }
};

module.exports={addcartController,getcartController,deletecartitemController}
