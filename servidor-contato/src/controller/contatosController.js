const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const add = (request, response) => {
  let contato = request.body
  let baseDados = model.agenda.contatos
  contato.id = Math.random().toString(36).substr(-8)

  if (baseDados.find(dado => dado.nome === contato.nome))
  response.status(400).send("Usuário já existe")
  
  else {
  model.agenda.contatos.push(contato)
  response.status(201).send(contato)
}
}

module.exports = {
  getAll,
  add
}

//retornar user com signo - 