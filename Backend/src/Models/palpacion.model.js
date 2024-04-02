const {Schema, model} = require ("mongoose")

const palpacionSchema= new Schema({
    fecha:{
        type: String,
        required: true,
    },
    estado:{
        type: String,
        require: true,
    
    },
    tiempo:{
        type: String,
        required: true,

    },
    tratamiento:{
        type: String,
       

    },
    nombreencargado:{
        type: String,
       
    },
  
},

{
    timestamps: true //Fecha donde se creó el esquema
});

module.exports= model("palpacion", palpacionSchema);