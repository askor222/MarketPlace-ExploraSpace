const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8000;


// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);



// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/my-ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Enhorabuena! Connected to MongoDB');
}).catch((error) => {
  console.log('MongoDB connection error:', error);
});



app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:8000/`);
});
