'use client';

import React, { useEffect } from 'react';
import { Modal, Input, Select, Button, Form as AntForm, message } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../types/userTypes';
import { useAppDispatch } from '@/store/index';
import { addUser, updateUser } from '@/store/usersSlice';

const { Option } = Select;

type UserFormModalProps = {
  visible: boolean;
  onClose: () => void;
  defaultValues?: User | null;
};

export const UserFormModal = ({
  visible,
  onClose,
  defaultValues,
}: UserFormModalProps) => {
  const [form] = AntForm.useForm();
  const dispatch = useAppDispatch();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    form.resetFields();
    if (visible && defaultValues) {
      form.setFieldsValue(defaultValues);
    }
  }, [visible, defaultValues, form]);

  const handleSave = (values: Omit<User, 'id'>) => {
    if (defaultValues?.id) {
      dispatch(updateUser({ ...defaultValues, ...values }));
      messageApi.success('Пользователь обновлён');
    } else {
      dispatch(addUser({ id: uuidv4(), ...values }));
      messageApi.success('Пользователь добавлен');
    }
    onClose();
  };

  return (
    <Modal
      title={
        defaultValues ? 'Редактировать пользователя' : 'Добавить пользователя'
      }
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      {contextHolder}
      <AntForm form={form} layout="vertical" onFinish={handleSave}>
        <AntForm.Item
          label="Имя"
          name="name"
          rules={[
            { required: true, message: 'Введите имя' },
            { min: 2, message: 'Минимум 2 символа' },
          ]}
        >
          <Input placeholder="Введите имя" />
        </AntForm.Item>

        <AntForm.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Введите email' },
            { type: 'email', message: 'Неверный формат email' },
          ]}
        >
          <Input placeholder="Введите email" />
        </AntForm.Item>

        <AntForm.Item
          label="Телефон"
          name="phone"
          rules={[
            { required: true, message: 'Введите телефон' },
            {
              pattern: /^(\+7)\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
              message: 'Введите корректный номер телефона в формате +7',
            },
          ]}
        >
          <Input placeholder="+7 (111) 111-11-11" />
        </AntForm.Item>

        <AntForm.Item
          label="Роль"
          name="role"
          rules={[{ required: true, message: 'Выберите роль' }]}
        >
          <Select>
            <Option value="Admin">Admin</Option>
            <Option value="User">User</Option>
            <Option value="Manager">Manager</Option>
          </Select>
        </AntForm.Item>

        <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
          Сохранить
        </Button>
      </AntForm>
    </Modal>
  );
};
