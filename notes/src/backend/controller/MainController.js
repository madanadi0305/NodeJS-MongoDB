const Notes=require('../databases/mongooseDB').Notes;
//var notesData;
function homePage(req,res){
Notes.find({},(err,notes)=>{
    if(err){
        console.log(err);

        res.render('homePage');
    }
    else{
        console.log(notes);
     //   notesData=notes;
        res.render("homePage",{notes:notes});
    }
});
//res.render('homePage',{notes:notesData});

}

module.exports={
    home:homePage
}