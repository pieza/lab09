const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productoSchema= new Schema({
    descripcion:{
        type:String,
        trim:true
    },
    cantidad:{
        type:Number,
        trim:true
    },
    stock:{
        type:Boolean,
        trim:true,
    },
    talla:{
        type:String,
        trim:true
    }
});

module.exports = mongoose.model('Producto',productoSchema);