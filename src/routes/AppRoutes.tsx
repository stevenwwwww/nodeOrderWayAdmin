/*
 * @Author: steven libo@rongma.com
 * @Date: 2024-10-24 16:12:45
 * @LastEditors: steven libo@rongma.com
 * @LastEditTime: 2024-10-24 18:08:52
 * @FilePath: \admin-fronted\src\routes\AppRoutes.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/routes/AppRoutes.tsx
// src/routes/AppRoutes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from '../components/Auth/Register.tsx';
import Login from '../components/Auth/Login.tsx';
import Home from '../components/Home.tsx';
import UserList from '../components/Users/UserList.tsx'; // 引入用户列表
import OrderList from '../components/Orders/OrderList.tsx'; // 引入订单列表
import { Layout, Menu } from 'antd';
import { UserOutlined, OrderedListOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const AppRoutes: React.FC = () => {
    const token = localStorage.getItem('token');

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider width={200}>
                    <Menu mode="inline" defaultSelectedKeys={['1']}>
                        {token && (
                            <>
                                <Menu.ItemGroup key="userGroup" title="用户管理" icon={<UserOutlined />}>
                                    <Menu.Item key="1"><a href="/users">用户列表</a></Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="orderGroup" title="订单管理" icon={<OrderedListOutlined />}>
                                    <Menu.Item key="2"><a href="/orders">订单列表</a></Menu.Item>
                                </Menu.ItemGroup>
                            </>
                        )}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
                        <Routes>
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/home" element={token ? <Home /> : <Navigate to="/login" />} />
                            <Route path="/users" element={token ? <UserList /> : <Navigate to="/login" />} />
                            <Route path="/orders" element={token ? <OrderList /> : <Navigate to="/login" />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};

export default AppRoutes;


