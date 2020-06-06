const express = require('express')
const server = express()

server.use(express.static("public"))

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

server.get("/", (req, res) => {
  return res.render('index.njk')
})

server.get("/fields", (req, res) => {
  return res.render('fields.njk')
})

server.listen(3000)