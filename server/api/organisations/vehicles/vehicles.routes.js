const {Router} = require('express');
const VehicleController = require('./vehicles.controller');

const router = Router({mergeParams: true});
router.post('/', VehicleController.create);
router.get('/', VehicleController.getAll);
router.get('/:vehicleId', VehicleController.getById);
router.put('/:vehicleId', VehicleController.updateById);
router.delete('/:vehicleId', VehicleController.deleteById);

module.exports = router;
