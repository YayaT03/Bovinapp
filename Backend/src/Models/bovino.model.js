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
        type: Date,
    },
    fechadeingreso:{
        type: Date,
    },
    fechadesalida:{
        type: Date,
    },
},

  {timestamps: true}

);

module.exports= model("bovino", bovinoSchema);