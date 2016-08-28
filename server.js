const express = require('express')
const app = express()
const hml = process.env.HML || false
const serveApp = require('./middleware')({endPoint: 'hello', hml:hml})

app.use(serveApp)
const server = app.listen(8080, () => 
  console.log(`👂 Server listening on port ${server.address().port}`)
)

if (hml) require('chokidar-socket-emitter')({port: 5776})