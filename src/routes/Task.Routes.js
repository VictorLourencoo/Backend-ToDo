const express = require('express');

const routes = express.Router();

const TaskController = require('../controller/Task.controller');

const TaskValidation = require('../middlewares/Task.validation');

//Create task
routes.post('/', TaskValidation, TaskController.create);
//update task and status
routes.put('/:id', TaskController.update);
routes.put('/:id/:done', TaskController.done);
//delete task
routes.delete('/:id', TaskController.delete);

//lists tasks
routes.get('/:id', TaskController.show);
routes.get('/filter/all/:mac', TaskController.all);
routes.get('/filter/late/:mac', TaskController.late);
routes.get('/filter/today/:mac', TaskController.today);
routes.get('/filter/week/:mac', TaskController.week);
routes.get('/filter/month/:mac', TaskController.month);
routes.get('/filter/year/:mac', TaskController.year);
module.exports = routes;
