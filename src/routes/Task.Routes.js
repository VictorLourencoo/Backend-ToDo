const express = require('express');

const routes = express.Router();

const TaskController = require('../controller/Task.controller');

routes.post('/', TaskController.create);

module.exports = routes;
