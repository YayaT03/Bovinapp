const { Router } = require('express')
const route = Router()
const inventarioCtrl = require('../Controllers/inventario.controller')

route.get('/list', inventarioCtrl.list);
//route.get('/:id', bovinoCtrl.listid);
route.post('/add', inventarioCtrl.add);
route.put('/:id', inventarioCtrl.update);
route.delete('/:id', inventarioCtrl.delete);

module.exports = route