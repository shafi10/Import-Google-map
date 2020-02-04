const {Schema, model} = require('mongoose');

const mapSchema = new Schema({
    lat:{
        type:String,
        required:true
    },
    lng:{
        type:String,
        required:true
    },
    mapp:[
    {
        type:Schema.Types.ObjectId,
        ref:'Mapp'
    }
]
})

const Map = model('Map', mapSchema);

module.exports=Map;