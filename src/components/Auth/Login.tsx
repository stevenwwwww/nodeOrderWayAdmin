// src/components/Auth/Login.tsx
import React, { useState } from 'react';
import { userApi } from '../../services/userApi.ts';
import { Form, Input, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const Login: React.FC = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // 用于导航

    const handleLogin = async () => {
        try {
            const response = await userApi.register({ user, password }); // 确保使用 login API
            if (response) {
                localStorage.setItem('token', JSON.stringify(response.token)); // 存储 token
                message.success('登录成功');
                // navigate('/home'); // 跳转到首页
                window.location.href = "http://localhost:3001/home"

            } else {
                message.error('登录失败，请检查用户名和密码');
            }
        } catch (error) {
            message.error('登录失败，请稍后再试');
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Card title="登录" style={{ width: 300 }}>
                    <Form name="login" onFinish={handleLogin}>
                        <Form.Item
                            name="user"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input 
                                placeholder="用户名" 
                                value={user} 
                                onChange={(e) => setUser(e.target.value)} // 更新状态
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password 
                                placeholder="密码" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} // 更新状态
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default Login;
