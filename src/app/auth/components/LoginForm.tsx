'use client';

import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

import { mockLogin } from '@/api/mockAuth';

type LoginFormProps = {
  onSuccess: () => void;
};

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: LoginFormValues) => {
    try {
      setLoading(true);
      await mockLogin(values.email, values.password);
      onSuccess();
    } catch (error) {
      message.error('Неверная почта или пароль');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Введите email' },
          { type: 'email', message: 'Некорректный email' },
        ]}
      >
        <Input
          placeholder="test@test.ru"
          autoComplete="email"
          disabled={loading}
        />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          { required: true, message: 'Введите пароль' },
          { min: 6, message: 'Минимум 6 символов' },
        ]}
      >
        <Input.Password placeholder="123456" disabled={loading} />
      </Form.Item>

      <Button type="primary" htmlType="submit" block loading={loading}>
        Войти
      </Button>
    </Form>
  );
}
