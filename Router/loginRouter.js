const route=require("express").Router();

const loginController=require("../Controller/loginController");
route.post("/register",loginController.register );
route.get("/login",loginController.login );

module.exports=route;