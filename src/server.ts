import express from 'express'

const app = express()

/** 
 * GET = Buscar uma informação
 * POST = Criar uma informação
 * PUT = Alterar uma informação
 * DELETE = Apagar uma informação
 * PATCH = Alterar uma informação específica
*/

// Request(req)= Informações entrando
// Response(res) = Informações saindo

app.get('/g', (req, res) => {
  return res.send("Esse é o método GET")
})

app.post('/p', (req, res) => {
  return res.send("Esse é o método POST")
})


app.listen(3000, () => console.log("Server is running!"))