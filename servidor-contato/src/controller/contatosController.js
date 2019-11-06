const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.model);
};

const add = (request, response) => {
  console.log(request.body)
  response.status(200).send()
}

module.exports = {
  getAll,
  add
}

