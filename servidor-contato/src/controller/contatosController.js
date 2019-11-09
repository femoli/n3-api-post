const model = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(model.agenda);
};

const dataConvertida = (dataNascimento) => {
  dataNascimento.split("/") 
  return dataConvertida
}




//dataNascimento
//function signoUsuario = 
//const conversorData = (dataString) => {
// const dia = dataString.split("/")[0]

const add = (request, response) => {
  let contato = request.body
  let baseDados = model.agenda.contatos
  contato.id = Math.random().toString(36).substr(-8)

  if (!contato.nome) {
    response.status(400).send("O nome é obrigatório!");
    return;
  } else if (!contato.dataNascimento) {
    response.status(400).send("A data de nascimento é obrigatória!");
    return;
  } else if (!contato.celular) {
    response.status(400).send("O celular é obrigatório!");
    return;
  }
 
  if (baseDados.find(dado => dado.nome === contato.nome))
    response.status(400).send("Usuário já existe")

  else {
    model.agenda.contatos.push(contato)
    response.status(201).send("Cadastro concluído com sucesso")
  }
}



module.exports = {
  getAll,
  add
}
