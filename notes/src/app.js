const express=require('express');
const app=express();
const cors=require('cors');
const logger=require('morgan');
const compression=require('compression');
const bodyParser=require('body-parser');
//const routes=require('./backend/routes/MainRoutes');
const routes = require('./backend/routes/MainRoutes');
const path=require('path');
const cookieParser=require('cookie-parser');
app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set("views", __dirname + "/client/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs"); 
app.use(express.static(path.resolve(__dirname, "client")));
app.use(logger('dev'));
app.use(cookieParser());
app.use("/",routes);
app.set("ports",process.env.PORT||5000);

app.listen(app.get("ports"),()=>{
console.log("Application running on port 5000");

});

module.exports=app;