const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/index.js')

router.get('/', (req, res) => {
  res.send('This is Groot!')
})

router.get('/coasters', controllers.getCoasters)
router.get('/coaster/:id', controllers.getCoasterById)
router.get('/comments', controllers.getComments)

module.exports = router
