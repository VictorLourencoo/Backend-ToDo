const express = require('express');

const routes = express.Router();

const TaskController = require('../controller/Task.controller');

const TaskValidation = require('../middlewares/Task.validation');
const MacAddressValidation = require('../middlewares/Macaddress.Validation');

routes.post('/', TaskValidation, TaskController.create);
routes.put('/:id', TaskValidation, TaskController.update);
routes.get('/all', MacAddressValidation, TaskController.all);
routes.get('/:id', TaskController.show);
routes.delete('/:id', TaskController.delete);
module.exports = routes;
