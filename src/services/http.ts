/*
 * @Author: steven libo@rongma.com
 * @Date: 2024-10-24 17:49:35
 * @LastEditors: steven libo@rongma.com
 * @LastEditTime: 2024-10-24 18:10:53
 * @FilePath: \admin-fronted\src\services\http.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/services/http.ts
import { message } from 'antd';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5008/api/',
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000, // 请求超时时间（毫秒）
});

// 请求拦截器
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token') || '';
        if (token && token !== "undefined") {
            config.headers.user_token = JSON.parse(token) || "";
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    response => {
        let code = response?.data?.error;
        return response.data;
    },
    error => {
        if (error.response) {
            if (error.response.status === 401) {
                message.error('登录过期，请重新登录');
            } else {
                message.error('网络错误，请稍后再试');
            }
        } else if (error.request) {
            // 处理断网异常
        } else {
            console.log('请求失败，请稍后再试');
        }
        return Promise.reject(error);
    }
);

// 封装 GET 请求
export const get = (url: string, params = {}) => {
    return instance.get(url, { params });
};

// 封装 POST 请求
export const post = (url: string, data = {}) => {
    return instance.post(url, data);
};

// 封装 PUT 请求
export const put = (url: string, data = {}) => {
    return instance.put(url, data);
};

// 封装 DELETE 请求
export const del = (url: string) => {
    return instance.delete(url);
};

export default instance;
