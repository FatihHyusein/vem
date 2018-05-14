import { PermissionsComponent } from "./permissions.component";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    permissions: (() => {
        const myOrganisation = state.organisations && state.organisations.find(o => o.id === state.profile.organisationId);
        return (myOrganisation && myOrganisation.permissions) || []
    })()
});

const mapDispatchToProps = {
    onSave: () => {
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PermissionsComponent);
