'use client';

import React from 'react';
import { Form, Select, Button } from 'antd';
import {
  FilterFormProps,
  offices,
  positions,
  ratings,
  FilterValues,
} from '../../utils/filterFormData';

const { Option } = Select;

export default function FilterForm({ onFilter }: FilterFormProps) {
  const [form] = Form.useForm<FilterValues>();

  const handleValuesChange = (
    changedValues: FilterValues,
    allValues: FilterValues,
  ) => {
    onFilter(allValues);
  };

  const handleReset = () => {
    form.resetFields();
    onFilter({});
  };

  return (
    <Form
      form={form}
      layout="inline"
      onValuesChange={handleValuesChange}
      style={{ marginBottom: 16 }}
    >
      {/* Офис */}
      <Form.Item name="office" label="Офис">
        <Select placeholder="Выберите офис" allowClear style={{ width: 160 }}>
          {offices.map((office) => (
            <Option key={office} value={office}>
              {office}
            </Option>
          ))}
        </Select>
      </Form.Item>

      {/* Должность */}
      <Form.Item name="position" label="Должность">
        <Select
          placeholder="Выберите должность"
          allowClear
          style={{ width: 180 }}
        >
          {positions.map((position) => (
            <Option key={position} value={position}>
              {position}
            </Option>
          ))}
        </Select>
      </Form.Item>

      {/* Оценка */}
      <Form.Item name="rating" label="Оценка">
        <Select placeholder="Выберите оценку" allowClear style={{ width: 180 }}>
          {ratings.map((rating) => (
            <Option key={rating} value={rating}>
              {rating}
            </Option>
          ))}
        </Select>
      </Form.Item>

      {/* Сброс */}
      <Form.Item>
        <Button type="primary" onClick={handleReset}>
          Сбросить
        </Button>
      </Form.Item>
    </Form>
  );
}
