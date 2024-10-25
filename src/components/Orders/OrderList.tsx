/*
 * @Author: steven libo@rongma.com
 * @Date: 2024-10-24 16:12:45
 * @LastEditors: steven libo@rongma.com
 * @LastEditTime: 2024-10-24 17:43:12
 * @FilePath: \admin-fronted\src\components\Orders\OrderList.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';

interface Order {
    id: string;
    title: string;
    price: number;
    status: string;
}

const OrderList: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        // 假设从 API 获取订单列表
        const fetchOrders = async () => {
            // 示例数据
            const data: Order[] = [
                { id: '1', title: '清洁服务', price: 200, status: '待接单' },
                { id: '2', title: '修理服务', price: 150, status: '已接单' },
            ];
            setOrders(data);
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h2>订单管理</h2>
            <Button type="primary" style={{ marginBottom: 16 }}>
                创建订单
            </Button>
            <Table dataSource={orders} rowKey="id">
                <Table.Column title="订单标题" dataIndex="title" key="title" />
                <Table.Column title="价格" dataIndex="price" key="price" />
                <Table.Column title="状态" dataIndex="status" key="status" />
                <Table.Column
                    title="操作"
                    key="action"
                    render={(text, record) => (
                        <Button type="link">查看</Button>
                    )}
                />
            </Table>
        </div>
    );
};

export default OrderList;
