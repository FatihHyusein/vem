import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Breadcrumb, Icon, Layout, Menu} from 'antd';
import AdminRoute from './routes/admin/admin.container';
import 'antd/dist/antd.css';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;


class App extends React.Component {
    state = {
        current: 'home',
    };

    handleClick = (e) => {
        console.log(e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home">
                            <Link to={'/'}>
                                <Icon type="home"/> Home
                            </Link>
                        </Menu.Item>
                        <Menu.SubMenu title={<Link to={'/admin'}><Icon type="setting"/>Admin</Link>}>
                            <Menu.Item key="/admin/permissions">
                                <Link to={'/admin/permissions'}>
                                    Permissions
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/admin/roles">
                                <Link to={'/admin/roles'}>
                                    Roles
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/admin/users">
                                <Link to={'/admin/users'}>
                                    Users
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/admin/vehicles">
                                <Link to={'/admin/vehicles'}>
                                    Vehicles
                                </Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Header>
                <Layout>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                            <Route path="/admin" component={AdminRoute}/>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default App;
