import type { ReactNode } from 'react';

import styles from '../DashboardPage.module.scss';

type ChartCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function ChartCard({
  title,
  children,
  className,
}: ChartCardProps) {
  return (
    <div className={`${styles.card} ${className ?? ''}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
