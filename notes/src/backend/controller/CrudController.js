const db=require('../databases/mongooseDB');
const Notes=db.Notes;
var docs1;
function add(req,res){
var newTitle=req.body.title;
var newDescription=req.body.description;
var _id=parseInt(req.id);
if(!(newTitle ||newDescription)){
    console.log("Enter both details");
    res.render('homePage');
}
else{
    var Note=new Notes({});
    Note.id=_id;
    Note.title=newTitle;
    Note.description=newDescription;
    Note.save((err,docs)=>{
        if(err){
            console.log('Error saving');
        }
        docs1=docs;
         
    });
    console.log(docs1);
    console.log('Notes added successfully');
    res.redirect("/"); 
}

}

function updateNotes(req,res){
var _id=(req.params._id);
Notes.findByIdAndUpdate(_id,(err,docs)=>{
if(err){
    console.log(err);
    res.redirect('/');
}
else{
    console.log('Updated Successfully');
    res.render('/');
}
});
}


function deleteNotes(req,res){
var _id=(req.params._id);
Notes.findByIdAndRemove(_id,(error,docs)=>{
if(error){
    console.log(error);
}
else{
    console.log(docs);
console.log('Note deleted successfully');

res.redirect('/');
}
});

}
module.exports={
 add:add,
 delete:deleteNotes,
 update:updateNotes   
}
