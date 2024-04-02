const { Router } = require('express')
const route = Router()
const servicioCtrl = require('../Controllers/servicio.controller')

route.get('/list', servicioCtrl.list);
//route.get('/:id', bovinoCtrl.listid);
route.post('/add', servicioCtrl.add);
route.put('/:id', servicioCtrl.update);
route.delete('/:id', servicioCtrl.delete);

module.exports = route