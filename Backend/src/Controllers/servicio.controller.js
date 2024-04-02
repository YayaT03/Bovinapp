const servicioCtrl = {}
const servicioModel = require('../Models/servicio.model')

servicioCtrl.list = async (req, res) => {
    try {
        const servicio = await servicioModel.find()
        res.json({
            ok: true,
           servicio

        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}

servicioCtrl.add = async (req, res) => {
    try {
        const { } = req.body

        
        const newServicio = new servicioModel({

           fecha,
           tipo,
           nombretoro,
           nombreencargado,


        });
        await newServicio.save();
        res.json({
            ok: true,
            newServicio
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
servicioCtrl.update = async (req, res) => {
    try {
        const { id } = req.params;
        const servicio = await servicioModel.findById({ _id: id })
        if (!servicio) {
            res.status(404).json({
                ok: false,
                message: 'servicio no encontrado'

            })
        }

    
    
        const fecha = req.body.fecha || servicio.fecha
        const tipo = req.body.tipo || servicio.tipo
        const nombretoro = req.body.nombretoro || servicio.nombretoro
        const nombreencargado = req.body.nombreencargado|| servicio.nombreencargado

        const servicioUpdate = {
            fecha,
            tipo,
            nombretoro,
            nombreencargado

        }

        await servicio.updateOne(servicioUpdate)

        res.json({
            ok: true,
            message: 'el servicio fue actualizado'
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
servicioCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const servicio = await servicioModel.findById({ _id: id })
        if (!servicio) {
            res.status(404).json({
                ok: false,
                message: 'servicio no encontrado'

            })
        }

        await servicio.deleteOne();
        res.json({
            ok: true,
            message: 'servicio eliminado'
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}

module.exports = servicioCtrl