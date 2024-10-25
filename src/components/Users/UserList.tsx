/*
 * @Author: steven libo@rongma.com
 * @Date: 2024-10-24 16:12:45
 * @LastEditors: steven libo@rongma.com
 * @LastEditTime: 2024-10-24 18:35:00
 * @FilePath: \admin-fronted\src\components\Users\UserList.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';

interface User {
    id: string;
    user: string;
    email: string;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // 假设从 API 获取用户列表
        const fetchUsers = async () => {
            // 示例数据
            const data: User[] = [
                { id: '1', user: '用户1', email: 'user1@example.com' },
                { id: '2', user: '用户2', email: 'user2@example.com' },
            ];
            setUsers(data);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>用户管理</h2>
            <Button type="primary" style={{ marginBottom: 16 }}>
                添加用户
            </Button>
            <Table dataSource={users} rowKey="id">
                <Table.Column title="用户名" dataIndex="user" key="user" />
                <Table.Column title="邮箱" dataIndex="email" key="email" />
                <Table.Column
                    title="操作"
                    key="action"
                    render={(text, record) => (
                        <Button type="link">编辑</Button>
                    )}
                />
            </Table>
        </div>
    );
};

export default UserList;
