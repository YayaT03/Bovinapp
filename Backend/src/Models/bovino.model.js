const {Schema, model} = require ("mongoose")

const bovinoSchema= new Schema({
    nombre:{
        type: String,
        required: true,
    },
    razabovino:{
        type: String,
    
    },
    procedencia:{
        type: String,
    },
    fechanacimiento:{
        type: String,
    },
    fechadeingreso:{
        type: String,
    },
    fechadesalida:{
        type: String,
    },
},

{
    timestamps: true //Fecha donde se creó el esquema
});

module.exports= model("bovino", bovinoSchema);