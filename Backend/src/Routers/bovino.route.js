const { Router } = require('express')
const route = Router()
const bovinoCtrl = require('../Controllers/bovino.controller')

route.get('/list', bovinoCtrl.list);
//route.get('/:id', bovinoCtrl.listid);
route.post('/add', bovinoCtrl.add);
route.put('/:id', bovinoCtrl.update);
route.delete('/:id', bovinoCtrl.delete);

module.exports = route