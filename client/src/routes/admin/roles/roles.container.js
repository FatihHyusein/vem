import {RolesComponent} from "./roles.component";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {},
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(RolesComponent);
