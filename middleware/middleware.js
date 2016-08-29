import express from 'express'
import {renderToString as render} from 'react-dom/server'
import React from 'react'
import App from '../app/app'

module.exports = (options) => {

  const serveApp = (req, res, next) => {
      if (req.url === options.endPoint) {
        const ssrApp = render(<App  options={options}/>)
        const hml = `
          System.trace = true
          window.hml = System.import('systemjs-hot-reloader/default-listener')
        `
        const html = `
          <!DOCTYPE html>
          <div id="app">${ssrApp}</div>
          <script src="jspm_packages/system.js"></script>
          <script src="config.js"></script>
          <script>
            ${ options.hml ? hml : ''}
            Promise.resolve(window.hml)
              .then(() => System.import('index.js'))
          </script>
        `
        res.status(200).send(html)
      }
    next()
  }
  
  const serveStatics = express.static('./app')

  return (req, res, next) => 
    serveStatics(req, res, () =>
      serveApp(req, res, next)
    )
}