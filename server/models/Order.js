// El modelo de pedido se utiliza para representar los pedidos realizados por los usuarios. Algunos campos comunes en el modelo de pedido pueden incluir:

// El modelo de pedido te permite almacenar y gestionar la información relacionada con los pedidos realizados por los usuarios, incluidos los productos, 
// la cantidad, el total y otra información relevante para el procesamiento de pedidos.



const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
