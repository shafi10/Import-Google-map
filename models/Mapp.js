const {Schema, model} = require('mongoose');

const mappSchema = new Schema({
    lat:{
        type:String,
        required:true
    },
    lng:{
        type:String,
        required:true
    },
    accident:{
        type:Number,
        required:true
    }
})

const Mapp = model('Mapp', mappSchema);

module.exports= Mapp;