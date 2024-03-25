const partoCtrl = {}
const partoModel = require('../Models/secado.model')

partoCtrl.list = async (req, res) => {
    try {
        const parto = await partoModel.find()
        res.json({
            ok: true,
            parto

        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}

partoCtrl.add = async (req, res) => {
    try {
        const {fechaparto,sexo, nombrecria } = req.body

      

        const newParto = new partoModel({
           fechaparto,
           sexo,
           nombrecria

        });
        await newParto.save();
        res.json({
            ok: true,
            newParto
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
partoCtrl.update = async (req, res) => {
    try {
        const { id } = req.params;
        const parto = await partoModel.findById({ _id: id })
        if (!parto) {
            res.status(404).json({
                ok: false,
                message: 'registro de parto no encontrado'

            })
        }

    
    
        const fechaparto = req.body.fechaparto || parto.fechaparto
        const sexo = req.body.sexo || parto.sexo
        const nombrecria = req.body.nombrecria || parto.nombrecria
        
      
        const partoUpdate = {
           fechaparto,
           sexo,
           nombrecria

        }

        await parto.updateOne(partoUpdate)

        res.json({
            ok: true,
            message: 'El registro de parto fue actualizado'
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
 partoCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const parto = await partoModel.findById({ _id: id })
        if (!parto) {
            res.status(404).json({
                ok: false,
                message: 'Registro de parto no encontrado'

            })
        }

        await parto.deleteOne();
        res.json({
            ok: true,
            message: 'Registro de parto eliminado'
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}

module.exports = partoCtrl