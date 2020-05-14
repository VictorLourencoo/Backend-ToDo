const express = require('express');

const routes = express.Router();

const TaskController = require('../controller/Task.controller');

const TaskValidation = require('../middlewares/Task.validation');
const MacAddressValidation = require('../middlewares/Macaddress.Validation');

routes.post('/', TaskValidation, TaskController.create);
routes.put('/:id', TaskController.update);
routes.get('/all', MacAddressValidation, TaskController.all);
routes.get('/:id', TaskController.show);
routes.delete('/:id', TaskController.delete);
routes.put('/:id/:done', TaskController.done);
routes.get('/filter/late', MacAddressValidation, TaskController.late);
module.exports = routes;
