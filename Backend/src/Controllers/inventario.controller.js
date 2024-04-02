const inventarioCtrl = {}
const inventarioModel = require('../Models/inventario.model')

inventarioCtrl.list = async (req, res) => {
    try {
        const inventario = await inventarioModel.find()
        res.json({
            ok: true,
           inventario 

        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}

inventarioCtrl.add = async (req, res) => {
    try {
        const {fechallenado, numeropajilla, raza, cantidadtotal } = req.body

       

        const newInventario = new inventarioModel({
           fechallenado,
           numeropajilla,
           raza,
           cantidadtotal


        });
        await newInventario.save();
        res.json({
            ok: true,
            newInventario
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
inventarioCtrl.update = async (req, res) => {
    try {
        const { id } = req.params;
        const inventario = await inventarioModel.findById({ _id: id })
        if (!inventario) {
            res.status(404).json({
                ok: false,
                message: 'inventario no encontrado'

            })
        }

    
    
        const fechallenado = req.body.fechallenado || inventario.fechallenado
        const numeropajilla = req.body.numeropajilla || inventario.numeropajilla
        const raza = req.body.raza || inventario.raza
        const cantidadtotal = req.body.cantidadtotal|| inventario.cantidadtotal
        
        const inventarioUpdate = {
            fechallenado,
            numeropajilla,
            raza,
            cantidadtotal

        }

        await inventario.updateOne(inventarioUpdate)

        res.json({
            ok: true,
            message: 'El inventario fue actualizado'
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}
inventarioCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const inventario = await inventarioModel.findById({ _id: id })
        if (!inventario) {
            res.status(404).json({
                ok: false,
                message: 'inventario no encontrado'

            })
        }

        await inventario.deleteOne();
        res.json({
            ok: true,
            message: 'invenrtario eliminado'
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message
        })
    }
}

module.exports = inventarioCtrl