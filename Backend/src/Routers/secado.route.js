const { Router } = require('express')
const route = Router()
const secadoCtrl = require('../Controllers/secado.controller')

route.get('/list', secadoCtrl.list);
//route.get('/:id', bovinoCtrl.listid);
route.post('/add', secadoCtrl.add);
route.put('/:id', secadoCtrl.update);
route.delete('/:id', secadoCtrl.delete);

module.exports = route