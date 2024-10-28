/*
 * @Author: steven libo@rongma.com
 * @Date: 2024-10-24 16:04:16
 * @LastEditors: steven libo@rongma.com
 * @LastEditTime: 2024-10-25 14:43:56
 * @FilePath: \admin-fronted\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/App.tsx
import React from 'react';
import AppRoutes from './routes/AppRoutes.tsx';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const App: React.FC = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login'; // 使用 window.location.href 进行页面跳转
    };

    const isLoggedIn = !!localStorage.getItem('token'); // 检查登录状态

    return (
        <Layout>
            {isLoggedIn && (
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="logout" onClick={handleLogout}>
                            退出
                        </Menu.Item>
                    </Menu>
                </Header>
            )}
            <AppRoutes />
        </Layout>
    );
};

export default App;


