const express = require('express')
const server = express()

server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

const generateController = require('./controllers/generateController')

server.get("/", (req, res) => {
  return res.render('index.njk')
})

server.get("/generate", generateController.generate)
server.post("/generate", generateController.post)


server.listen(3000,
  console.log('Server is Running')
)