import type { ColumnsType } from 'antd/es/table';
import { Button, Popconfirm } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { User } from '@/app/management/types/userTypes';

type UserTableColumnsProps = {
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
};

export const getUserTableColumns = ({
  onEdit,
  onDelete,
}: UserTableColumnsProps): ColumnsType<User> => [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Роль',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Действия',
    key: 'actions',
    render: (_, record) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 15,
        }}
      >
        <Button type="primary" onClick={() => onEdit(record)}>
          Редактировать
        </Button>

        <Popconfirm
          title="Удалить пользователя?"
          onConfirm={() => onDelete(record.id)}
          okText="Да"
          cancelText="Отмена"
        >
          <Button
            type="text"
            icon={<CloseOutlined />}
            style={{
              backgroundColor: '#b12f2f',
              color: '#F5F3F0',
              borderRadius: '50%',
            }}
          />
        </Popconfirm>
      </div>
    ),
  },
];
