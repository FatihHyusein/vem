const {Router} = require('express');
const RolesController = require('./roles.controller');

const router = Router({mergeParams: true});
router.post('/', RolesController.create);
router.get('/', RolesController.getAll);
router.get('/:roleId', RolesController.getById);
router.put('/:roleId', RolesController.updateById);
router.delete('/:roleId', RolesController.deleteById);

module.exports = router;
