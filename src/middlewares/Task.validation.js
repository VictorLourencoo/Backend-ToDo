const TaskModel = require('../model/Task.model');
//const TaskController = require('../controller/Task.controller');

const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {
  const { macaddress, type, title, description, when } = req.body;

  if (!macaddress) {
    return res.status(400).json({ error: 'campo de mac vazio' });
  } else if (!type) {
    return res.status(400).json({ error: 'campo de tipo vazio' });
  } else if (!title) {
    return res.status(400).json({ error: 'campo de título vazio' });
  } else if (!description) {
    return res.status(400).json({ error: 'campo de descrição vazio' });
  } else if (!when) {
    return res.status(400).json({ error: 'campo data e hora vazio' });
  } else if (isPast(new Date(when))) {
    return res.status(400).json({ error: 'Escolha uma data e hora futura' });
  } else {
    let exists;
    exists = await TaskModel.findOne({
      when: { $eq: new Date(when) },
      macaddress: { $in: macaddress },
    });
    if (exists) {
      return res
        .status(400)
        .json({ error: 'Ja existe uma tarefa nesse dia e horario' });
    }

    next();
  }
};

module.exports = TaskValidation;
