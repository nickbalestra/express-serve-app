const express = require('express')
import {renderToString as render} from 'react-dom/server'
import React from 'react'
import App from '../app/app'

module.exports = (options) => {

  const serveApp = (req, res, next) => {
      const endpointRegX = new RegExp(options.url);
      if (endpointRegX.test(req.url)) {
        const ssrApp = render(<App  options={options}/>)
        const html = `
          <!DOCTYPE html>
            <div id="app">${ssrApp}</div>
            <script src="jspm_packages/system.js"></script>
            <script src="config.js"></script>
            <script>System.import('index.js')</script>
        `
        res.status(200).send(html)
      }
    next()
  }

  const serveStatics = express.static(`./${(options.public || 'app')}`)

  return (req, res, next) => 
    serveStatics(req, res, () =>
      serveApp(req, res, next)
    )
}