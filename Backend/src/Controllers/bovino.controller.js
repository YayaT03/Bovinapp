const bovinoCtrl={}
const bovinoModel= require("../Models/bovino.model")

bovinoCtrl.listar= async (req,res) => {
    try{
        const bovino = await  bovinoModel.find();
        res.json({
            ok:true, 
            bovino,
        });
    } catch(error){
        res.status(500).json({
            ok:false, 
            Message: error.Message
        })
    }
};

bovinoCtrl.add= async (req, res) =>{
    try{
        const {nombre,razabovino,procedencia,fechanacimiento,fechadeingreso,fechadesalida }=req.body
        const newbovino= new bovinoModel({
            nombre,
            razabovino,
            procedencia,
            fechanacimiento,
            fechadeingreso,
            fechadesalida
        });

        await newbovino.save();
        res.json({
            ok: true,
            newbovino

        });

} catch (error) {
    res.status(500).json({
        ok: false,
        Message: error.Message
    });

}
};

bovinoCtrl.update= async (req,res)=>{
    try{
        const {id}=req.params
        const bovino= await bovinoModel.findById ({_id:id})
        if (!bovino){
            return res.json({
            ok:true, 
            Message: "el bovino no esta en la base de datos",

        })
    } 
    
    const nombre = req.body.nombre || bovino.nombre
    const razabovino = req.body.razabovino || bovino.razabovino
    const procedencia = req.body.procedencia || bovino.procedencia
    const fechanacimiento = req.body.fechanacimiento || bovino.fechanacimiento
    const fechadeingreso = req.body.fechadeingreso || bovino.fechadeingreso
    const fechadesalida = req.body.fechadesalida || bovino.fechadesalida

    const bovinoUpdate ={
        nombre,
        razabovino,
        procedencia,
        fechanacimiento,
        fechadeingreso,
        fechadesalida
    }
     await bovino.updateOne(bovinoUpdate)
     res.json({
        ok:true,
        Message: "el cliente fue actualizado"
     })
    
     } catch (error){
        res.status(500).json ({
            ok: false, 
            Message:error.Message

        })    
    }
}

bovinoCtrl.delete= async(req,res)=>{
    try{
        const {id}=req.params;
        const bovino=await bovinoModel.findById({_id:id})
        if (!bovino){
            return  res.status(400).json({
            ok: false, 
            Message:"el bovino no existe"
            
        })
        }
       
        await bovino.deleteOne()
        res.json({
            ok:true,
            Message: "el bovino fue eliminado de todas partes"
        })



    } catch (error){
        res.status(500).json({
            ok:false,
            Message: error.Message
        })
    }
}

module.exports=bovinoCtrl;