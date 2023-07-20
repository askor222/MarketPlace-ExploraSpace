const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token)

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
  }
  try {
    const decoded = jwt.verify(token, 'secreto_del_token'); // Reemplaza 'tu_secreto_secreto' con tu secreto para firmar y verificar el token

    // Buscar al usuario por su ID en la base de datos
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ error: 'Acceso denegado. Usuario no encontrado.' });
    }

    // Agregar el usuario al objeto de solicitud para su uso en las rutas protegidas
    req.user = user;

    next(); // Continuar con la ejecución de la siguiente función de middleware o controlador
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido o expirado.' });
  }
};

module.exports = authMiddleware;
