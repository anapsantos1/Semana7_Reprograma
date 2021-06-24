const express = require("express")
const app = express()

const estados = require("./data/estados-cidades.json")

app.get("/", (request, response) => {

    response.status(200).send({"Mensage": " Salve! <3"})

})

app.get("/estados/todos", (request, response) => {

    response.status(200).send(estados.filter(estado => estado))
})

app.get("/estados/:sigla", (request, response) => {

    const valorSigla = request.params.sigla
    console.log(valorSigla)

    response.status(200).send(estados.find(estado => estado.sigla == valorSigla))
})


app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000")
} )