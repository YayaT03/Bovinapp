const {Schema, model} = require ("mongoose")

const secadoSchema= new Schema({
    fecha:{
        type: String,
       
    },
    medicamento:{
        type: String,
        //required: true,

    },
    fechaesperadaregreso:{
        type: String,
    },
    nombreencargado:{
        type: String,
    },
  
},

{
    timestamps: true //Fecha donde se creó el esquema
});

module.exports= model("secado", secadoSchema);