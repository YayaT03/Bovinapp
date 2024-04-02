const {Schema, model} = require ("mongoose")

const servicioSchema= new Schema({
    fecha:{
        type: String,
        
    },
    tipo:{
        type: String,
       
    
    },
    nombretoro:{
        type: String,

    },
  
nombrecria:{
    type: String,

},


    timestamps: true //Fecha donde se creó el esquema
});

module.exports= model("servicio", servicioSchema);