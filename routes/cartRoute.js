const express = require('express')
const { isAdmin, requireSignIn }= require("./../middlewares/authMiddleware.js");
const {
    addcartController
} = require("../controllers/cartController.js");

const router = express.Router();

//routes
// create category
router.post(
  "/addcart",
addcartController
);

router.get("/gg",(req,res)=>{
  console.log("ffffffddddddddddddd")
  res.status(201).send({
    success: true,
    message: "cart Created Successfully",
    
  });
});



module.exports = router;