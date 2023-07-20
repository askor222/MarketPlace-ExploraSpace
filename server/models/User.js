// El modelo de usuario se utiliza para representar la información de los usuarios que interactúan con tu plataforma de comercio electrónico.

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user', // Por defecto, los nuevos usuarios tendrán el rol de 'user'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

