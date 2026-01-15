'use client';

import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';

import { useAppSelector, useAppDispatch } from '@/store/index';
import { User } from '@/app/management/types/userTypes';
import { removeUser } from '@/store/usersSlice';
import { UserFormModal } from '../UserFormModal/UserFormModal';
import { getUserTableColumns } from './columns';

export const UserTable = () => {
  const users = useAppSelector((state) => state.users.users);
  const dispatch = useAppDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleAdd = () => {
    setEditingUser(null);
    setModalVisible(true);
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setModalVisible(true);
  };

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: 'Вы уверены, что хотите удалить пользователя?',
      onOk: () => dispatch(removeUser(id)),
    });
  };

  const columns = getUserTableColumns({
    onEdit: handleEdit,
    onDelete: handleDelete,
  });

  return (
    <div>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={handleAdd}>
        Добавить пользователя
      </Button>

      <Table<User>
        dataSource={users}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />

      <UserFormModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        defaultValues={editingUser}
      />
    </div>
  );
};
