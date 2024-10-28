/*
 * @Author: steven libo@rongma.com
 * @Date: 2024-10-24 16:12:45
 * @LastEditors: steven libo@rongma.com
 * @LastEditTime: 2024-10-25 17:22:33
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
                {
                    "1": "雪球",
                    "_id": "671b616c51f181fae664b92d",
                    "产品编号": "结构类型",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.976Z",
                    "updatedAt": "2024-10-25T09:14:20.976Z"
                },
                {
                    "1": "ABC基金",
                    "_id": "671b616c51f181fae664b92e",
                    "产品编号": "客户名称",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "45590",
                    "_id": "671b616c51f181fae664b92f",
                    "产品编号": "报价日期",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "中证1000指数",
                    "_id": "671b616c51f181fae664b930",
                    "产品编号": "挂钩标的",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "10000000",
                    "_id": "671b616c51f181fae664b931",
                    "产品编号": "最大名义本金",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "45590",
                    "_id": "671b616c51f181fae664b932",
                    "产品编号": "报价有效期/预计起息日",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "24M",
                    "_id": "671b616c51f181fae664b933",
                    "产品编号": "期限",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "1",
                    "_id": "671b616c51f181fae664b934",
                    "产品编号": "敲出观察锁定",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "1",
                    "_id": "671b616c51f181fae664b935",
                    "产品编号": "敲出障碍价格",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "-0.005",
                    "_id": "671b616c51f181fae664b936",
                    "产品编号": "敲出障碍价格调整",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "0.8",
                    "_id": "671b616c51f181fae664b937",
                    "产品编号": "敲入障碍价格",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "每日观察",
                    "_id": "671b616c51f181fae664b938",
                    "产品编号": "每日观察",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "1",
                    "_id": "671b616c51f181fae664b939",
                    "产品编号": "敲入执行价格",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "1",
                    "_id": "671b616c51f181fae664b93a",
                    "产品编号": "敲入参与率",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "同敲出票息",
                    "_id": "671b616c51f181fae664b93b",
                    "产品编号": "红利票息",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "1",
                    "_id": "671b616c51f181fae664b93c",
                    "产品编号": "保证金比例",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "1",
                    "_id": "671b616c51f181fae664b93d",
                    "产品编号": "最大亏损比例",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "0",
                    "_id": "671b616c51f181fae664b93e",
                    "产品编号": "绝对后端返息",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "1": "0",
                    "_id": "671b616c51f181fae664b93f",
                    "产品编号": "年化后端返息",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.977Z",
                    "updatedAt": "2024-10-25T09:14:20.977Z"
                },
                {
                    "_id": "671b616c51f181fae664b940",
                    "产品编号": "敲出票息",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.978Z",
                    "updatedAt": "2024-10-25T09:14:20.978Z"
                },
                {
                    "_id": "671b616c51f181fae664b941",
                    "产品编号": "警告：此线以下部分对客户保密",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.978Z",
                    "updatedAt": "2024-10-25T09:14:20.978Z"
                },
                {
                    "1": "0.001",
                    "_id": "671b616c51f181fae664b942",
                    "产品编号": "销售佣金",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.978Z",
                    "updatedAt": "2024-10-25T09:14:20.978Z"
                },
                {
                    "1": "上海分公司",
                    "_id": "671b616c51f181fae664b943",
                    "产品编号": "销售渠道",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.978Z",
                    "updatedAt": "2024-10-25T09:14:20.978Z"
                },
                {
                    "1": "已开户/意向询价/...",
                    "_id": "671b616c51f181fae664b944",
                    "产品编号": "备注",
                    "__v": 0,
                    "createdAt": "2024-10-25T09:14:20.978Z",
                    "updatedAt": "2024-10-25T09:14:20.978Z"
                }
            ]
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
