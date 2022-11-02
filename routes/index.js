const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/index.js')

router.get('/', (req, res) => {
  res.send('This is Groot!')
})

router.get('/coasters', controllers.getCoasters)
router.get('/coaster/:id', controllers.getCoasterById)
router.get('/comments', controllers.getComments)
router.post('/comment', controllers.createComment)
router.delete('/comment/:id', controllers.deleteComment)
router.post('/addcoaster', controllers.addCoaster)
router.get('/coasters/score/:score', controllers.coasterByRating)
router.delete('/coaster/:id', controllers.deleteCoaster)
router.put('/updatescore/:id', controllers.setScore)

module.exports = router
