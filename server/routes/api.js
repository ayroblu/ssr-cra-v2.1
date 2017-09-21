const express = require('express')
const router = express.Router()
const {MainApi} = require('../api')

router.get('/', async function(req, res, next) {
  const db = new MainApi()
  const {text} = await db.getMain()
  res.json({text, message: 'This came from the api'})
})

module.exports = router

