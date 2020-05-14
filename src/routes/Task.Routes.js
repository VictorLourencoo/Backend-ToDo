const express = require('express');

const routes = express.Router();

const TaskController = require('../controller/Task.controller');

const TaskValidation = require('../middlewares/Task.validation');
const MacAddressValidation = require('../middlewares/Macaddress.Validation');
//Create task
routes.post('/', TaskValidation, TaskController.create);
//update task and status
routes.put('/:id', TaskController.update);
routes.put('/:id/:done', TaskController.done);
//delete task
routes.delete('/:id', TaskController.delete);

//lists tasks
routes.get('/all', MacAddressValidation, TaskController.all);
routes.get('/:id', TaskController.show);
routes.get('/filter/late', MacAddressValidation, TaskController.late);
routes.get('/filter/today', MacAddressValidation, TaskController.today);
routes.get('/filter/week', MacAddressValidation, TaskController.week);
routes.get('/filter/month', MacAddressValidation, TaskController.month);
routes.get('/filter/year', MacAddressValidation, TaskController.year);
module.exports = routes;
