import { Router } from 'express';
import { crearUsuario, getUsuarios } from '../controllers/usuario';

const router: Router = Router();

router.post('/crear', crearUsuario);

router.get('/getUsuarios', getUsuarios);

module.exports = router;