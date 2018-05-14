import React from 'react';
import { Link, Route } from "react-router-dom";
import PermissionsRoute from './permissions/permissions.container';
import RolesRoute from './roles/roles.container';
import UsersRoute from './users/users.container';
import VehiclesRoute from './vehicles/vehicles.container';
import { Button, Icon, Menu } from "antd";

export class AdminComponent extends React.Component {
    state = {
        collapsed: false,
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '10px' }}>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1">
                            <Link to="/admin/permissions"><Icon
                                type="pie-chart"/> {!this.state.collapsed && 'PermissionsRoute'}</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/admin/roles"><Icon type="desktop"/> {!this.state.collapsed && 'RolesRoute'}
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">

                            <Link to="/admin/users"><Icon type="inbox"/> {!this.state.collapsed && 'UsersRoute'}</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/admin/vehicles"><Icon type="inbox"/> {!this.state.collapsed && 'VehiclesRoute'}
                            </Link>
                        </Menu.Item>
                    </Menu>
                </div>
                <div style={{ width: '100%' }}>
                    <Route path="/admin/permissions" component={PermissionsRoute}/>
                    <Route path="/admin/roles" component={RolesRoute}/>
                    <Route path="/admin/users" component={UsersRoute}/>
                    <Route path="/admin/vehicles" component={VehiclesRoute}/>
                </div>
            </div>
        )
    }
}

