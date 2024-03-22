const bovinoCtrl = {}
const bovinoModel = require('../Models/bovino.model')

bovinoCtrl.list = async (req, res) => {
    try {
        const bovino = await bovinoModel.find()
        res.json({
            ok: true,
           bovino

        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}

bovinoCtrl.add = async (req, res) => {
    try {
        const {nombre, razabovino, procedencia, fechanacimiento,fechadeingreso,fechadesalida  } = req.body

        const verificar = await bovinoModel.findOne({ nombre });
        if (verificar) {
            return res.json({
                ok: false,
                message: "El  nombre ya esta registrado"
            })
        }

        const newBovino = new bovinoModel({
            nombre,
            razabovino,
            procedencia,
            fechanacimiento,
            fechadeingreso,
            fechadesalida


        });
        await newBovino.save();
        res.json({
            ok: true,
            newBovino
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
bovinoCtrl.update = async (req, res) => {
    try {
        const { id } = req.params;
        const bovino = await bovinoModel.findById({ _id: id })
        if (!bovino) {
            res.status(404).json({
                ok: false,
                message: 'bovino no encontrado'

            })
        }

    
    
        const nombre = req.body.nombre || bovino.nombre 
        const razabovino = req.body.razabovino || bovino.razabovino
        const procedencia = req.body.procedencia || bovino.procedencia
        const fechanacimiento = req.body.fechanacimiento|| bovino.fechanacimiento
        const fechadeingreso= req.body.fechadeingreso || bovino.fechadeingreso
        const fechadesalida = req.body.fechadesalida || bovino.fechadesalida

        const bovinoUpdate = {
            nombre,
            razabovino,
            procedencia,
            fechanacimiento,
            fechadeingreso,
            fechadesalida

        }

        await bovino.updateOne(bovinoUpdate)

        res.json({
            ok: true,
            message: 'Elbovino fue actualizado'
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
bovinoCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const bovino = await bovinoModel.findById({ _id: id })
        if (!bovino) {
            res.status(404).json({
                ok: false,
                message: 'bovino no encontrado'

            })
        }

        await bovino.deleteOne();
        res.json({
            ok: true,
            message: 'bovino eliminado'
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}

module.exports = bovinoCtrl
