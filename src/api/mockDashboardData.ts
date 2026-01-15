import type { ChartData, ChartOptions, TooltipItem } from 'chart.js';

/* ---------- Месяцы ---------- */

export const labels: string[] = [
  'Янв',
  'Фев',
  'Мар',
  'Апр',
  'Май',
  'Июн',
  'Июл',
  'Авг',
  'Сен',
  'Окт',
  'Нов',
  'Дек',
];

/* ---------- Продажи мебели за 2025 год ---------- */

export const barData: ChartData<'bar', number[], string> = {
  labels,
  datasets: [
    {
      label: 'продажи через магазин',
      data: [7, 13, 21, 15, 22, 18, 13, 17, 26, 21, 17, 24],
      backgroundColor: '#B97C00',
      barPercentage: 1.6,
      categoryPercentage: 0.6,
      order: 1,
    },
    {
      label: 'продажи в интернете',
      data: [13, 15, 13, 18, 13, 12, 19, 19, 29, 14, 13, 16],
      backgroundColor: '#004E7C',
      barPercentage: 1.6,
      categoryPercentage: 0.6,
      order: 2,
    },
  ],
};

/* ---------- Общие продажи мебели за 2024 и 2025 год ---------- */

export const stackedAreaData: ChartData<'line', number[], string> = {
  labels,
  datasets: [
    {
      label: '2024 год',
      data: [11, 17, 24, 21, 27, 22, 25, 17, 33, 21, 18, 27],
      fill: true,
      backgroundColor: '#B97C00',
    },
    {
      label: '2025 год',
      data: [20, 28, 34, 33, 35, 30, 32, 36, 55, 35, 30, 40],
      fill: true,
      backgroundColor: '#004E7C',
    },
  ],
};

/* ---------- Расходы на рекламу за 2025 год ---------- */

const TOTAL_BUDGET = 500_000;

const expenses = [
  { label: 'Соцсети', value: 180_000, color: '#004E7C' },
  { label: 'Радио', value: 90_000, color: '#B97C00' },
  { label: 'Наружка', value: 120_000, color: '#2A5D34' },
  { label: 'Блогеры', value: 60_000, color: '#b12f2f' },
];

const spent = expenses.reduce((a, e) => a + e.value, 0);
const remaining = Math.max(TOTAL_BUDGET - spent, 0);

export const commercialData: ChartData<'bar', number[], string> = {
  labels: ['Бюджет'],
  datasets: [
    ...expenses.map((e) => ({
      label: e.label,
      data: [e.value],
      backgroundColor: e.color,
    })),
    {
      label: 'Остаток',
      data: [remaining],
      backgroundColor: '#C1BFB7',
    },
  ],
};

/* ---------- Количество проданных категорий мебели за 2025 год ---------- */

export const doughnutData: ChartData<'doughnut', number[], string> = {
  labels: [
    'Односп. кровать',
    'Двусп. кровать',
    'Полутор. кровать',
    'Раскл. диван',
    'Нераскл. диван',
  ],
  datasets: [
    {
      data: [37, 64, 42, 57, 21],
      backgroundColor: ['#004E7C', '#B97C00', '#2A5D34', '#b12f2f', '#555555'],
    },
  ],
};

/* ---------- Расходы за 2025 год ---------- */

export const pieData: ChartData<'pie', number[], string> = {
  labels: [
    'Реклама',
    'Перевозки',
    'Производство',
    'Складирование',
    'Персонал',
    'Магазины',
  ],
  datasets: [
    {
      data: [500000, 1300000, 2700000, 700000, 1100000, 350000],
      backgroundColor: [
        '#004E7C',
        '#B97C00',
        '#2A5D34',
        '#b12f2f',
        '#555555',
        '#001529',
      ],
    },
  ],
};

/* ---------- Options ---------- */

export const stackedOptions: ChartOptions<'line'> = {
  responsive: true,
  scales: {
    y: {
      stacked: false,
    },
  },
};

export const doughnutOptions: ChartOptions<'doughnut' | 'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 40,
        boxHeight: 15,
        padding: 10,
        font: {
          size: 12,
        },
      },
    },
    datalabels: {
      color: '#fff',
      font: {
        weight: 'bold',
      },
    },
  },
};

export const commercialOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { stacked: true },
    y: {
      stacked: true,
      max: TOTAL_BUDGET,
      ticks: {
        callback: (value) => `${Number(value).toLocaleString()} ₽`,
      },
    },
  },

  plugins: {
    legend: {
      position: 'bottom',
    },

    tooltip: {
      callbacks: {
        label: (ctx: TooltipItem<'bar'>) => {
          const value = ctx.raw as number;
          const percent = ((value / TOTAL_BUDGET) * 100).toFixed(1);
          return `${ctx.dataset.label}: ${value.toLocaleString()} ₽ (${percent}%)`;
        },
      },
    },

    datalabels: {
      color: '#fff',
      formatter: (value: number) =>
        value === 0 ? '' : `${value.toLocaleString()} ₽`,
      font: {
        weight: 'bold',
      },
    },
  },
};
