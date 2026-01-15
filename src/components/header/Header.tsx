'use client';

import { useState } from 'react';
import { Layout, Space, Typography, Modal, Button } from 'antd';
import { Github } from '@/assets/icons/Github';
import { Telegram } from '@/assets/icons/Telegram';
import { Max } from '@/assets/icons/Max';
import styles from './Header.module.scss';

const { Header: AntHeader } = Layout;
const { Title, Text } = Typography;

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AntHeader className={styles.header}>
        {/* Левая часть — логотип */}
        <div className={styles.logo}>
          <Title level={4} style={{ color: '#FFE0B2', margin: 0 }}>
            LOGOTYPE
          </Title>
        </div>

        {/* Правая часть — кнопка */}
        <Button
          style={{ width: '200px', fontSize: '18px', fontWeight: '600' }}
          onClick={() => setIsModalOpen(true)}
        >
          Контакты
        </Button>
      </AntHeader>

      {/* Модалка с контактами */}
      <Modal
        title="Контакты"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <Space orientation="vertical" size="middle">
          <Space size="large">
            <Telegram />
            <Text style={{ fontSize: 16 }}>@Kozhukhov_Nikita</Text>
          </Space>

          <Space size="large">
            <Max />
            <Text style={{ fontSize: 16 }}>+7 906 777-23-49</Text>
          </Space>

          <Space size="large">
            <Github />
            <Text style={{ fontSize: 16 }}>
              <a href="https://github.com/nikita-kozhukhov" target="_blank">
                github.com/nikita-kozhukhov
              </a>
            </Text>
          </Space>
        </Space>
      </Modal>
    </>
  );
}
