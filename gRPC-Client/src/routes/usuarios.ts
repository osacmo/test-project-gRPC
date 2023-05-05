import { Router } from 'express';
import { crearUsuario, getUser, getUsuarios } from '../controllers/usuario';

const router: Router = Router();

router.post('/crear', crearUsuario);

router.get('/getUsuarios', getUsuarios);

router.get('/id/:id', getUser)

module.exports = router;