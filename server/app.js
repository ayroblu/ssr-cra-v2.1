const register = require('ignore-styles').default
// styles
const _ = require('lodash')
const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const md5File = require('md5-file')

const mimeTypes = {
  '.jpg': 'image/jpg'
, '.jpeg': 'image/jpeg'
, '.png': 'image/png'
}
register(undefined, (mod, filename) => {
  if (_.some(['.png', '.jpg'], ext=>filename.endsWith(ext))) {
    if (fs.statSync(filename).size < 10000) {
      const file = fs.readFileSync(filename).toString('base64')
      const ext = ['.png', '.jpg'].find(f=>filename.endsWith(f))
      const mimeType = mimeTypes[ext] || 'image/jpg'
      mod.exports = `data:${mimeType};base64,${file}`
    } else {
      const hash = md5File.sync(filename).slice(0, 8)
      const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`)
      mod.exports = `/static/media/${bn}`;
    }
  }
})

//require('babel-register')({
//  ignore: /\/(build|node_modules)\//,
//  presets: ['env', 'react-app']
//})

// routes
const index = require('./routes/index')
const api = require('./routes/api')
const universalLoader = require('./universal')

// App setup
const app = express()

// Support Gzip
app.use(compression())

// Support post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Setup logger
app.use(morgan('combined'))

app.use('/', index)

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.use('/api', api)

// Always return the main index.html, so react-router render the route in the client
app.use('/', universalLoader)

module.exports = app
