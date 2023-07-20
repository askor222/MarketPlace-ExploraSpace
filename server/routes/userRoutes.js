const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Ruta para registrar un nuevo usuario
router.post('/register', userController.registerUser);

// Ruta para iniciar sesión
router.post('/login', userController.loginUser);

// Ruta para obtener información de un usuario específico
router.get('/:userId', userController.getUserById);

// Ruta para cerrar sesión de un usuario específico
router.post('/logout/:userId', userController.logoutUser);

// Rutas protegidas con autenticación y autorización
router.get('/ruta-protegida-user', authMiddleware, userController.accessUserRoute);
router.get('/ruta-protegida-admin', authMiddleware, userController.accessAdminRoute);


module.exports = router;
