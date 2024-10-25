// src/services/userApi.ts
import { post, get } from './http.ts';

// 用户管理 API
export const userApi = {
    login: (data: { user: string; password: string }) => post('/auth/register', data),
    register: (data: { user: string; password: string }) => post('/auth/register', data),
    getUsers: () => get('/users'),
};
