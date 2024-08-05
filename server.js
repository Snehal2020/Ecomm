const express = require('express');
const app = express();
require('dotenv').config();
require('./config/db');
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoute');
const orderRoutes = require('./routes/orderRoute');
const path = require('path');

app.use(cors());  // This allows all origins by default
app.use(express.json());

app.use(authRoute);
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);
app.use("/order", orderRoutes);
app.use("/cart", cartRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
