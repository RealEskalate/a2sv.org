const router = require('express').Router()
const ContactController = require('../controllers/ContactController')

router.get('/',ContactController.get_all_contacts)
router.get('/:id',ContactController.get_contact_by_id)

router.post('/',ContactController.post_contact_data)
router.patch('/:id',ContactController.update_contact)

router.delete('/:id',ContactController.delete_contact)

module.exports = router
