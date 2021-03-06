const TaskModel = require('../model/Task.model');
const {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} = require('date-fns');

//Hora atual
const current = new Date();

class TaskController {
  async create(req, res) {
    const task = new TaskModel(req.body);
    await task
      .save()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async update(req, res) {
    await TaskModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json(error);
      });
  }

  async all(req, res) {
    await TaskModel.find({ macaddress: { $in: req.params.mac } })
      .sort('when')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return res.status(400).json(error);
      });
  }

  async show(req, res) {
    const id = req.params.id;
    await TaskModel.findById(id)
      .then((response) => {
        if (response) {
          return res.status(200).json(response);
        } else {
          return res.status(400).json('Tarefa nao existe');
        }
      })
      .catch((error) => {
        console.log(current);
        console.log(error);
        return res.status(400).json(error);
      });
  }

  async delete(req, res) {
    await TaskModel.deleteOne({ _id: req.params.id })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error, 'Erro ao deletar tarefa');
      });
  }
  //Atualizar Status de uma tarefa
  async done(req, res) {
    await TaskModel.findByIdAndUpdate(
      { _id: req.params.id },
      { done: req.params.done },
      { new: true }
    )
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json(error);
      });
  }

  async late(req, res) {
    await TaskModel.find({
      when: { $lt: current },
      macaddress: { $in: req.params.mac },
    })
      .sort('when')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json(error);
      });
  }

  async today(req, res) {
    await TaskModel.find({
      macaddress: { $in: req.params.mac },
      when: { $gte: startOfDay(current), $lte: endOfDay(current) },
    })
      .sort('when')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json(error);
      });
  }

  async week(req, res) {
    await TaskModel.find({
      macaddress: { $in: req.params.mac },
      when: { $gte: startOfWeek(current), $lte: endOfWeek(current) },
    })
      .sort('when')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json(error);
      });
  }

  async month(req, res) {
    await TaskModel.find({
      macaddress: { $in: req.params.mac },
      when: { $gte: startOfMonth(current), $lte: endOfMonth(current) },
    })
      .sort('when')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json(error);
      });
  }

  async year(req, res) {
    await TaskModel.find({
      macaddress: { $in: req.params.mac },
      when: { $gte: startOfYear(current), $lte: endOfYear(current) },
    })
      .sort('when')
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json(error);
      });
  }
}

module.exports = new TaskController();
