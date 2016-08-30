const app = require('express')()
const hml = process.env.HML || false
const serveApp = require('./middleware')({endPoint: '/boom', hml})
const bundle = require('jspm').bundle
const bundleOptions = {
  mangle: true,
  minify: true,
  injectConfig:true,
  lowResSourceMaps: true,
  sourceMaps: true
}
let server

app.use(serveApp)
bundle('index.js', 'app/build.js', bundleOptions)
  .then(() => {
    server = app.listen(8080, () => 
      console.log(`👂 Server listening on port ${server.address().port}`)
    )
  })

if (hml) require('chokidar-socket-emitter')({port: 5776})
