const mongoose= require("mongoose");

const cartSchema = new mongoose.Schema({
 products: [],
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
});

module.exports=mongoose.model('Cart',cartSchema)