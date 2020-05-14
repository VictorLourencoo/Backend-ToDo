const TaskModel = require('../model/Task.model');

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
    await TaskModel.find({ macaddress: { $in: req.body.macaddress } })
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
        console.log(error);

        return res.status(400).json(error, 'erro na busca da tarefa');
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
}

module.exports = new TaskController();
