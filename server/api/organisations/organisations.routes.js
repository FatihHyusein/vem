const {Router} = require('express');
const OrganisationsController = require('./organisations.controller');
const PermissionsRoutes = require('./permissions/permissions.routes');
const RolesRoutes = require('./roles/roles.routes');
const UsersRoutes = require('./users/users.routes');
const VehiclesRoutes = require('./vehicles/vehicles.routes');

const OrganisationModel = require('./organisation.model');
const router = Router();

router.post('/', OrganisationsController.create);
router.get('/', OrganisationsController.getAll);
router.get('/:organisationId', OrganisationsController.getById);
router.put('/:organisationId', OrganisationsController.updateById);
router.delete('/:organisationId', OrganisationsController.deleteById);
router.use('/:organisationId/permissions', getOrganisationById, PermissionsRoutes);
router.use('/:organisationId/roles', RolesRoutes);
router.use('/:organisationId/users', UsersRoutes);
router.use('/:organisationId/vehicles', VehiclesRoutes);

async function getOrganisationById(req, res, next) {
    req.organisation = await OrganisationModel.findById(req.params.organisationId).exec();
    next();
}

module.exports = router;
