const {Schema, model} = require ("mongoose")

const inventarioSchema= new Schema({
    fechallenado:{
        type: String,
       
    },
    numeropajilla:{
        type: String,
      
    
    },
    raza:{
        type: String,

    },
    cantidadtotal:{
        type: String,

    },
  
},

{
    timestamps: true //Fecha donde se creó el esquema
});

module.exports= model("inventario", inventarioSchema);