'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Layout, ConfigProvider } from 'antd';

import { store, persistor } from '@/store/index';

import AppHeader from '@/components/header/Header';
import SideBar from '@/components/sidebar/SideBar';
import { configProviderTheme } from '@/utils/configProviderTheme';

const { Header, Content } = Layout;

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ConfigProvider theme={configProviderTheme}>
          <Layout style={{ minHeight: '100vh' }}>
            <Header>
              <AppHeader />
            </Header>

            <Layout>
              <SideBar />

              <Content
                style={{ padding: 40, overflow: 'auto', color: 'black' }}
              >
                {children}
              </Content>
            </Layout>
          </Layout>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}
