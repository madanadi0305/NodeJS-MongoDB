const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/notesDB',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
    console.log(err);
    }

});
const notesSchema=mongoose.Schema({
    title:String,
    description:String
});
const Notes=mongoose.model('Notes',notesSchema);
module.exports={Notes:Notes};