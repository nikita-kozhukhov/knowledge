'use client';

import { useState } from 'react';
import { Button, Form, Input, Upload, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FeedbackModal from './components/FeedbackModal';
import { feedbackSchema, FeedbackFormValues, cityOptions } from './utils';

export default function FeedbackPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<FeedbackFormValues | null>(
    null,
  );

  const { control, handleSubmit, reset } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: '',
      email: '',
      city: '',
      comment: '',
      file: null,
    },
  });

  const onSubmit = (data: FeedbackFormValues) => {
    setSubmittedData(data);
    setModalOpen(true);
    reset();
  };

  return (
    <section>
      <Form
        layout="vertical"
        style={{ maxWidth: 500 }}
        onFinish={handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item
              label="Имя"
              validateStatus={fieldState.error ? 'error' : ''}
              help={fieldState.error?.message}
            >
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item
              label="Почта"
              validateStatus={fieldState.error ? 'error' : ''}
              help={fieldState.error?.message}
            >
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="city"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item
              label="Город"
              validateStatus={fieldState.error ? 'error' : ''}
              help={fieldState.error?.message}
            >
              <Select {...field} options={cityOptions} />
            </Form.Item>
          )}
        />

        <Controller
          name="comment"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item
              label="Комментарий"
              validateStatus={fieldState.error ? 'error' : ''}
              help={fieldState.error?.message}
            >
              <Input.TextArea rows={4} {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="file"
          control={control}
          render={({ field }) => (
            <Form.Item label="Файл">
              <Upload
                beforeUpload={() => false}
                maxCount={1}
                onChange={(info) =>
                  field.onChange(info.fileList[0]?.originFileObj ?? null)
                }
              >
                <Button icon={<UploadOutlined />}>Выбрать файл</Button>
              </Upload>
            </Form.Item>
          )}
        />

        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form>

      {/* модальное окно */}
      <FeedbackModal
        data={submittedData}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </section>
  );
}
