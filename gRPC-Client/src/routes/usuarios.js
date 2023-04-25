const express = require('express');
const router = express.Router();
const { crearUsuario, getUsuarios } = require('../controllers/usuario');

router.post('/crear', crearUsuario);

router.get('/getUsuarios', getUsuarios);

module.exports = router;
