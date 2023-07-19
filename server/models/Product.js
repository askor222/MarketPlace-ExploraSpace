// El modelo de producto se utiliza para representar los productos que se venden en tu tienda en línea. Algunos campos comunes en el modelo de producto pueden incluir:

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
