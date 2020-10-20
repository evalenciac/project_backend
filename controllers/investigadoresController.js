const { response } = require('express');
const Investigador = require('../models/investigadorModel');

const getInvestigadores = async(req, res = response) => {
    const investigadores = await Investigador.find().
    populate('usuario', 'nombre img').
    populate('proyecto', 'nombre img');

    res.json({
        ok: true,
        investigadores
    });
}
const crearInvestigador = async(req, res = response) => {
    const uid = req.uid;

    const investigador = new Investigador({
        usuario: uid,
        ...req.body
    });

    try {

        const investigadorDB = await investigador.save();
        res.json({
            ok: true,
            investigador: investigadorDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({

            ok: false,
            msg: 'Error inesperado hablar con el administrador'
        });
    }
}
const actualizarInvestigador = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'actualizarInvestigador'
    });
}
const eliminarInvestigador = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'eliminarInvestigador'
    });
}


module.exports = {
    getInvestigadores,
    crearInvestigador,
    actualizarInvestigador,
    eliminarInvestigador
}