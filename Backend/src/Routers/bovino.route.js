const {Router} = require("express")
const bovinoCtrl = require ("../Controllers/bovino.controller")
const route = Router ();


route.get ("/listar", bovinoCtrl.listar);

//route.post ("/bovinoid/:id", bovinoCtrl.listid);

route.post ("/add", bovinoCtrl.add);

route.put("/update/:id", bovinoCtrl.update);


route.delete("/delete/:id", bovinoCtrl.delete);

module.exports = route;