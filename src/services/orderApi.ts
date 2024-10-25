/*
 * @Author: steven libo@rongma.com
 * @Date: 2024-10-24 17:54:52
 * @LastEditors: steven libo@rongma.com
 * @LastEditTime: 2024-10-24 17:59:07
 * @FilePath: \admin-fronted\src\services\orderApi.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/services/orderApi.ts
import { post, get, del } from './http.ts';

// 订单管理 API
export const orderApi = {
    createOrder: (data: { title: string; description: string; price: number; images: string[] }) =>
        post('/orders', data),
    getOrders: () => get('/orders'),
    deleteOrder: (orderId: string) => del(`/orders/${orderId}`), // 删除订单的 API
};
