const express = require('express')
const app = express()
const serveApp = require('./middleware')({endPoint: 'hello'})

app.use(serveApp)
const server = app.listen(8080, () => 
  console.log(`👂 Server listening on port ${server.address().port}`)
)