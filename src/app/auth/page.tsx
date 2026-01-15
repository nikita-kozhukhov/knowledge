'use client';

import { useState } from 'react';
import { Card } from 'antd';

import LoginForm from './components/LoginForm';
import TwoFactorForm from './components/TwoFactorForm';

import styles from './AuthPage.module.scss';

type AuthStep = 'login' | '2fa';

export default function LoginPage() {
  const [step, setStep] = useState<AuthStep>('login');

  return (
    <section className={styles.login_container}>
      <Card title="Авторизация" style={{ width: 400 }}>
        {step === 'login' && <LoginForm onSuccess={() => setStep('2fa')} />}
        {step === '2fa' && <TwoFactorForm onSuccess={() => setStep('login')} />}
      </Card>
    </section>
  );
}
