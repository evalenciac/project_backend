/*
    Proyectos
    ruta: /api/proyectos
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../midlewares/validarCampos');

const { validarJWT } = require('../midlewares/validarJWT');
const { getProyectos, actualizarProyecto, eliminarProyecto, crearProyecto } = require('../controllers/proyectosController');


const router = Router();

router.get('/', getProyectos);


router.post('/', [
        validarJWT,
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearProyecto);

router.put('/:id', [],
    actualizarProyecto);

router.delete('/:id', eliminarProyecto);



module.exports = router; //para exportar