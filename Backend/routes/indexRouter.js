const router = require('express').Router()
// Add member related routes here 
router.get('/', async (req, res ) => {
    res.send('API working')
})
module.exports = router
