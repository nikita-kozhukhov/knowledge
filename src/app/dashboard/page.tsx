'use client';

import {
  barData,
  doughnutData,
  pieData,
  commercialData,
  stackedAreaData,
  stackedOptions,
  commercialOptions,
  doughnutOptions,
} from '@/api/mockDashboardData';

import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartCard from './components/ChartCard';

import styles from './DashboardPage.module.scss';

// регистрация chart.js
ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
);

export default function DashboardPage() {
  return (
    <section className={styles.dashboard_container}>
      <h1 className={styles.dashboard_header}>
        Графики и аналитика (на примере магазина мебели)
      </h1>

      <div className={styles.grid}>
        <ChartCard
          title="Продажи мебели за 2025 год"
          className={styles.top_card}
        >
          <Bar data={barData} />F
        </ChartCard>

        <ChartCard
          title="Общие продажи мебели за 2024 и 2025 год"
          className={styles.top_card}
        >
          <Line data={stackedAreaData} options={stackedOptions} />
        </ChartCard>

        <ChartCard
          title={`Расходы на рекламу за 2025 год\n(бюджет - 500.000р)`}
          className={styles.bottom_card}
        >
          <Bar
            data={commercialData}
            options={commercialOptions}
            plugins={[ChartDataLabels]}
          />
        </ChartCard>

        <ChartCard
          title="Колличество проданных категорий мебели за 2025 год"
          className={styles.bottom_card}
        >
          <Doughnut
            data={doughnutData}
            options={doughnutOptions}
            plugins={[ChartDataLabels]}
          />
        </ChartCard>

        <ChartCard
          title={`Общие расходы за 2025 год\n _`}
          className={styles.bottom_card}
        >
          <Pie data={pieData} options={doughnutOptions} />
        </ChartCard>
      </div>
    </section>
  );
}
