const router = require("express").Router();
var productController = require("../Controller/productController");
var auth=require("../MiddleWare/authLogin")

router.post("/insert", auth.verifyToken , productController.insertControl);
router.delete("/delete", auth.verifyToken, productController.deleteControl);
router.put("/:id", auth.verifyToken, productController.updateControl);
router.get("/findall", auth.verifyToken, productController.findAllControl);

module.exports = router;