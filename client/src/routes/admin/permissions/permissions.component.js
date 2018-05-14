import React from 'react';
import { EditableTableComponent } from "../../../shared/components/editable-table/editable-table.component";
import PropTypes from "prop-types";
import { Button } from 'antd';
import { PermissionModel } from "../../../models/PermissionModel";

export class PermissionsComponent extends React.Component {
    constructor() {
        super();
        this.state = { newPermission: null };

        this.columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                width: '80%',
                editable: true,
            },
        ];
    }

    onDataSave = (data) => {
        console.log(data);
    };

    onAdd = () => {
        this.setState({
            newPermission: new PermissionModel()
        });
    };

    render() {
        return (
            <div>
                <div>
                    <Button type="primary" icon="plus" onClick={this.onAdd}>New</Button>
                </div>
                <EditableTableComponent newItem={this.state.newPermission}
                                        data={this.props.permissions}
                                        columns={this.columns}
                                        onSave={this.onDataSave}/>
            </div>
        );
    }
}


PermissionsComponent.propTypes = {
    permissions: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
};
