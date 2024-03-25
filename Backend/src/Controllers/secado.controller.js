const secadoCtrl = {}
const secadoModel = require('../Models/secado.model')

secadoCtrl.list = async (req, res) => {
    try {
        const secado = await secadoModel.find()
        res.json({
            ok: true,
            secado

        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}

secadoCtrl.add = async (req, res) => {
    try {
        const {fecha,medicamento,fechaesperadaregreso,nombreencargado  } = req.body

      

        const newSecado = new secadoModel({
            fecha,
            medicamento,
            fechaesperadaregreso,
            nombreencargado

        });
        await newSecado.save();
        res.json({
            ok: true,
            newSecado
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
secadoCtrl.update = async (req, res) => {
    try {
        const { id } = req.params;
        const secado = await secadoModel.findById({ _id: id })
        if (!secado) {
            res.status(404).json({
                ok: false,
                message: 'registro de secado no encontrado'

            })
        }

    
    
        const fecha = req.body.fecha || secado.fecha
        const medicamento = req.body.medicamento || secado.medicamento
        const fechaesperadaregreso = req.body.fechaesperadaregreso || secado.fechaesperadaregreso
        const nombreencargado = req.body.nombreencargado|| secado.nombreencargado
      

        const secadoUpdate = {
           fecha,
           medicamento,
           fechaesperadaregreso,
           nombreencargado

        }

        await secado.updateOne(secadoUpdate)

        res.json({
            ok: true,
            message: 'El registro de secado fue actualizado'
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
 secadoCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const secado = await secadoModel.findById({ _id: id })
        if (!secado) {
            res.status(404).json({
                ok: false,
                message: 'Registro de secado no encontrado'

            })
        }

        await secado.deleteOne();
        res.json({
            ok: true,
            message: 'Registro de secado eliminado'
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}

module.exports = secadoCtrl