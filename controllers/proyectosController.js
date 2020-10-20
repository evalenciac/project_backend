const { response } = require('express');
const Proyecto = require('../models/proyectoModel');

const getProyectos = async(req, res = response) => {

    const proyectos = await Proyecto.find().populate('usuario', 'nombre img');


    res.json({
        ok: true,
        proyectos
    });
}
const crearProyecto = async(req, res = response) => {
    const uid = req.uid;

    const proyecto = new Proyecto({
        usuario: uid,
        ...req.body
    });

    try {

        const proyectoDB = await proyecto.save();
        res.json({
            ok: true,
            proyecto: proyectoDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({

            ok: false,
            msg: 'Error inesperado hablar con el administrador'
        });
    }


}
const actualizarProyecto = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizarProyecto'
    });
}
const eliminarProyecto = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminarProyecto'
    });
}


module.exports = {
    getProyectos,
    crearProyecto,
    actualizarProyecto,
    eliminarProyecto
}