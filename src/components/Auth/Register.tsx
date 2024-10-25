// src/components/Auth/Register.tsx
import React, { useState } from 'react';
import { loginUser } from '../../services/api.ts';

const Register: React.FC = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await registerUser({ user, email, password });
            setMessage(response.message);
        } catch (error) {
            setMessage('注册失败');
        }
    };

    return (
        <div>
            <h2>注册</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="用户名" onChange={(e) => setUser(e.target.value)} required />
                <input type="email" placeholder="邮箱" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="密码" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">注册</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
