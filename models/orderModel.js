const mongoose = require("mongoose");
const Product=require("./productmodel")
const orderSchema = new mongoose.Schema(
  {
    products: [],
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
    },
  },
  { timestamps: true }
);

module.exports= mongoose.model("Order", orderSchema);
