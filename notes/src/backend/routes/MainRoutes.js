const express=require('express');
const router=express.Router();
const crudController=require('../controller/CrudController');
const mainController=require('../controller/MainController');
router.route("/").get(mainController.home);
router.route("/add").post(crudController.add);
router.route("/delete/:_id").get(crudController.delete);
router.route("/update/:_id").get(crudController.update);
module.exports=router;