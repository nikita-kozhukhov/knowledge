'use client';

import { Layout, Menu, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { menuItems } from './menuItems';

const { Sider } = Layout;

export default function SideBar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider theme="dark" width={220} collapsed={collapsed} trigger={null}>
      <div
        style={{
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-end',
          padding: '0 16px',
        }}
      >
        <Button
          type="text"
          size="large"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ color: '#FFE0B2' }}
        />
      </div>

      {/* Меню */}
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[pathname]}
        items={menuItems}
      />
    </Sider>
  );
}
