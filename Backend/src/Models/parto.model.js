const {Schema, model} = require ("mongoose")

const partoSchema= new Schema({
    fechaparto:{
        type: String,
        required: true,
    },
    sexo:{
        type: String,
        require: true,
    
    },
    nombrecria:{
        type: String,

    },
  
},

{
    timestamps: true //Fecha donde se creó el esquema
});

module.exports= model("parto", partoSchema);