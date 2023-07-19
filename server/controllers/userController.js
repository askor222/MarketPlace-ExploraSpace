const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

// REGISTRAR UN NUEVO USUARIO
exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

// INICIAR SESIÓN DE USUARIO
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar si el usuario existe en la base de datos
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(400).json({ message: 'El usuario no existe' });
    }

    // Verificar la contraseña
    const isPasswordCorrect = existingUser.password === password;
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Generar el token de autenticación utilizando jwt
    const token = jwt.sign(
      { userId: existingUser._id, username: existingUser.username },
      'secreto_del_token' // Reemplaza con tu secreto para el token
    );

    res.status(200).json({message: "Bienvenido, has iniciado sesión", token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};

// OBTENER INFO DE UN USUARIO ESPECÍFICO
exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    // Buscar el usuario en la base de datos utilizando el ID proporcionado
    const user = await User.findById(userId);

    // Si el usuario no existe, retornar un mensaje de error
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Retornar la información del usuario
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener información del usuario' });
  }
};


// CERRAR SESIÓN DE USUARIO
exports.logoutUser = (req, res) => {
  try {
    const { userId } = req.params;

    // Realizar aquí la lógica para cerrar la sesión del usuario utilizando el ID
    // Esto puede incluir invalidar el token de autenticación, eliminar información de sesión, etc.

    // Por ejemplo, si estás utilizando tokens de autenticación, puedes invalidar el token asignándole una fecha de expiración en el pasado.
    // Asegúrate de tener acceso al modelo User en tu archivo y a la instancia del modelo que representa al usuario.

    // Ejemplo de cómo invalidar el token de autenticación
    User.findByIdAndUpdate(userId, { tokenExpiration: Date.now() }, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error al cerrar sesión' });
      }
      res.status(200).json({ message: 'Sesión cerrada exitosamente' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al cerrar sesión' });
  }
};



