'use client';

import { useRef, useState } from 'react';
import { Button, Input, message } from 'antd';
import type { InputRef } from 'antd';
import { mockVerify2FA } from '@/api/mockAuth';

const CODE_LENGTH = 6;

type Props = {
  onSuccess: () => void;
};

export default function TwoFactorForm({ onSuccess }: Props) {
  const [values, setValues] = useState<string[]>(Array(CODE_LENGTH).fill(''));
  const [loading, setLoading] = useState(false);

  const inputsRef = useRef<(InputRef | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < CODE_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const code = values.join('');

    if (code.length !== CODE_LENGTH) {
      message.error('Введите 6 цифр');
      return;
    }

    try {
      setLoading(true);
      await mockVerify2FA(code);

      message.success('Успешная авторизация');

      setTimeout(() => {
        setValues(Array(CODE_LENGTH).fill(''));
        onSuccess();
      }, 1000);
    } catch {
      message.error('Неверный код');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          marginBottom: 16,
        }}
      >
        {values.map((value, index) => (
          <Input
            key={index}
            value={value}
            maxLength={1}
            style={{ width: 40, textAlign: 'center' }}
            ref={(el) => {
              inputsRef.current[index] = el;
            }}
            onChange={(e) => handleChange(e.target.value, index)}
          />
        ))}
      </div>

      <Button type="primary" block onClick={handleSubmit} loading={loading}>
        Подтвердить
      </Button>
    </>
  );
}
