const {Router} = require('express');
const UsersController = require('./users.controller');

const router = Router({mergeParams: true});
router.post('/', UsersController.create);
router.get('/', UsersController.getAll);
router.get('/:userId', UsersController.getById);
router.put('/:userId', UsersController.updateById);
router.delete('/:userId', UsersController.deleteById);

module.exports = router;
