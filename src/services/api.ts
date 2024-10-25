// src/services/api.ts

import axios from 'axios';

// 创建 axios 实例
const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    timeout: 1000,
});

// 用户管理 API
export const userApi = {
    login: (data: { user: string; password: string }) => api.post('/auth/login', data),
    register: (data: { user: string; email: string; password: string }) => api.post('/auth/register', data),
    getUsers: () => api.get('/users'),
};

// 订单管理 API
export const orderApi = {
    createOrder: (data: { title: string; description: string; price: number; images: string[] }) =>
        api.post('/orders', data),
    getOrders: () => api.get('/orders'),
};

// 其他 API 可以继续添加
