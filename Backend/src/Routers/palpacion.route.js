const { Router } = require('express')
const route = Router()
const palpacionCtrl = require('..//Controllers/palpacion.controller')

route.get('/list', palpacionCtrl.list);
//route.get('/:id', bovinoCtrl.listid);
route.post('/add', palpacionCtrl.add);
route.put('/:id', palpacionCtrl.update);
route.delete('/:id', palpacionCtrl.delete);

module.exports = route