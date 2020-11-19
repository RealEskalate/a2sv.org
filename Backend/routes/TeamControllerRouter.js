const router = require('express').Router()
const teamController = require('../controllers/TeamController')

router.get('/',teamController.get_all_team)
router.get('/:id',teamController.get_member_by_id)

router.post('/',teamController.post_member_data)
router.patch('/:id',teamController.update_team)

router.delete('/:id',teamController.delete_a_member)

module.exports = router
