import  express  from "express";
import { registrar, perfil, confirmar, autenticar, olvidePassword,
        comprobarToken, nuevoPassword, actualizarPerfil, actualizarPassword
 } from "../controllers/veterinarioController.js"
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// Area publica
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword);
router.get('/recuperar-password/:token', comprobarToken);
router.post('/recuperar-password/:token', nuevoPassword)

// Area privada
router.get('/perfil', checkAuth, perfil );
router.put('/perfil/:id', checkAuth, actualizarPerfil)
router.put('/actualizar-password', checkAuth, actualizarPassword)


export default router