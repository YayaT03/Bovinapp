const palpacionCtrl = {}
const palpacionModel = require('../Models/palpacion.model')

palpacionCtrl.list = async (req, res) => {
    try {
        const palpacion = await palpacionModel.find()
        res.json({
            ok: true,
           palpacion

        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}

palpacionCtrl.add = async (req, res) => {
    try {
        const {fecha,estado,tiempo, tratamiento,nombreencargado } = req.body

        

        const newPalpacion = new palpacionModel({
            fecha,
            estado,
            tiempo,
            tratamiento, 
            nombreencargado,



        });
        await newPalpacion.save();
        res.json({
            ok: true,
            newPalpacion
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
palpacionCtrl.update = async (req, res) => {
    try {
        const { id } = req.params;
        const palpacion = await palpacionModel.findById({ _id: id })
        if (!palpacion) {
            res.status(404).json({
                ok: false,
                message: 'Palpacion no encontrada'

            })
        }

    
    
        const fecha = req.body.fecha || palpacion.fecha 
        const estado = req.body.estado || palpacion.estado
        const tiempo = req.body.tiempo || palpacion.tiempo
        const tratamiento = req.body.trtamiento|| palpacion.tratamiento
        const nombreencargado= req.body.nombreencargado || palpacion.nombreencargado
       

        const palpacionUpdate = {
            fecha,
            estado,
            tiempo,
            tratamiento,
            nombreencargado

        }

        await palpacion.updateOne(palpacionUpdate)

        res.json({
            ok: true,
            message: 'la palpacion fue actualizada'
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
palpacionCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const palpacion = await palpacionModel.findById({ _id: id })
        if (!palpacion) {
            res.status(404).json({
                ok: false,
                message: 'palpacion no encontrada'

            })
        }

        await palpacion.deleteOne();
        res.json({
            ok: true,
            message: 'palpacion eliminada'
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}

module.exports = palpacionCtrl