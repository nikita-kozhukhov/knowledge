import Link from 'next/link';
import {
  HomeOutlined,
  TableOutlined,
  KeyOutlined,
  SolutionOutlined,
  FileImageOutlined,
  BarChartOutlined,
  MessageOutlined,
} from '@ant-design/icons';

import type { MenuProps } from 'antd';

export const menuItems: MenuProps['items'] = [
  {
    key: '/',
    icon: <HomeOutlined />,
    label: <Link href="/">Главная</Link>,
  },
  {
    key: '/reports',
    icon: <TableOutlined />,
    label: <Link href="/reports">Отчеты</Link>,
  },
  {
    key: '/auth',
    icon: <KeyOutlined />,
    label: <Link href="/auth">Авторизация</Link>,
  },
  {
    key: '/management',
    icon: <SolutionOutlined />,
    label: <Link href="/management">Пользователи</Link>,
  },
  {
    key: '/carousel',
    icon: <FileImageOutlined />,
    label: <Link href="/carousel">Карусель</Link>,
  },
  {
    key: '/dashboard',
    icon: <BarChartOutlined />,
    label: <Link href="/dashboard">Дашборд</Link>,
  },
  {
    key: '/feedback',
    icon: <MessageOutlined />,
    label: <Link href="/feedback">Обратная связь</Link>,
  },
];
