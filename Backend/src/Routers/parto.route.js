const { Router } = require('express')
const route = Router()
const partoCtrl= require('../Controllers/parto.controller')

route.get('/list', partoCtrl.list);
//route.get('/:id', bovinoCtrl.listid);
route.post('/add', partoCtrl.add);
route.put('/:id', partoCtrl.update);
route.delete('/:id', partoCtrl.delete);

module.exports = route