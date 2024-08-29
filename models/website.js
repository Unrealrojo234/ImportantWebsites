const mongoose = require('mongoose')
const WebsitesSchema = mongoose.Schema({
    link:{
        type:"String",
        required:true
    },
    name:{
        type:"String",
        required:true
    },
    use:{
        type:"String",
        required:true
    }
},
{
    timestamps:true
})

const Websites = mongoose.model('Websites',WebsitesSchema);
module.exports = Websites;

