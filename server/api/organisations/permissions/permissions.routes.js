const {Router} = require('express');
const PermissionsController = require('./permissions.controller');

const router = Router({mergeParams: true});
router.post('/', PermissionsController.create);
router.get('/', PermissionsController.getAll);
router.get('/:permissionId', PermissionsController.getById);
router.put('/:permissionId', PermissionsController.updateById);
router.delete('/:permissionId', PermissionsController.deleteById);

module.exports = router;
