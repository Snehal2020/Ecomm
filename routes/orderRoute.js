const express = require('express')
const { isAdmin, requireSignIn }= require("./../middlewares/authMiddleware.js");
const {
    addorderController
} = require("../controllers/orderController.js");
const {
  addcartController,
  getcartController,
  deletecartitemController
} = require("../controllers/cartController.js");

const router = express.Router();


router.post(
  "/add",
addorderController
);

//routes
// create category
router.post(
  "/add-order",
addcartController
);

router.get("/get-cart/:uid",getcartController)
router.get("/delete-cart-item",deletecartitemController)

//getALl category
router.get("/get-orders",addorderController );


//delete category
router.delete(
  "/cancel-order/:id",
 
);

module.exports = router;