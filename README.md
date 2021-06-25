# Setima semana de aula na Reprograma ![rocket](https://github.githubassets.com/images/icons/emoji/unicode/1f680.png)

**Autora: Ana Paula Araujo**

**Curso: Reprograma {BACKEND}**

Essa semana aprendemos a usar os comandos (request, response) e a usar a ferramenta postman.

O foco da atividade foi entender quais são os comandos necessário para criar um servidor com o node.js.

No exercício criamos as seguites rotas das demandas de negócio:

### [GET] "/estados/todos"

Retorna lista completa de estados-cidades

```
app.get("/estados/todos", (request, response) => {

    response.status(200).send(estados.filter(estado => estado))
})

```

### [GET] "/estados/{sigla}"

Retorna nome, sigla e cidades de uma sigla especifica

```
app.get("/estados/:sigla", (request, response) => {

    const valorSigla = request.params.sigla
    console.log(valorSigla)

    response.status(200).send(estados.find(estado => estado.sigla == valorSigla))
})
```

**Material para estudo: **

[Fonte: Mozilla (Mensagens HTTP)](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Messages)

