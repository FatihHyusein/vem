import {AdminComponent} from "./admin.component";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: () => push('/about-us')
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(AdminComponent);
