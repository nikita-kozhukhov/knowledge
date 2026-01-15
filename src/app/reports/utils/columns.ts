export type Column<T> = {
  header: string;
  accessorKey: keyof T;
};

type Rating =
  | 'отлично'
  | 'хорошо'
  | 'удовлетворительно'
  | 'неудовлетворительно';

type Position = 'младший продавец' | 'продавец' | 'старший продавец';

export type DataType = {
  id: number;
  office: string;
  name: string;
  position: Position;
  plan: number;
  sold: number;
  percent: number;
  rating: Rating;
};

export const columns: Column<DataType>[] = [
  { header: 'Офис', accessorKey: 'office' },
  { header: 'Имя', accessorKey: 'name' },
  { header: 'Должность', accessorKey: 'position' },
  { header: 'План', accessorKey: 'plan' },
  { header: 'Продано станков', accessorKey: 'sold' },
  { header: 'Результат', accessorKey: 'percent' },
  { header: 'оценка', accessorKey: 'rating' },
];
