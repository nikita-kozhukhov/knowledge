export const offices = ['Офис А', 'Офис Б', 'Офис В', 'Офис Г', 'Офис Д'];
export const positions = ['младший продавец', 'продавец', 'старший продавец'];
export const ratings = [
  'неудовлетворительно',
  'удовлетворительно',
  'хорошо',
  'отлично',
];

export type FilterValues = {
  office?: string;
  position?: string;
  rating?: string;
};

export type FilterFormProps = {
  onFilter: (filters: FilterValues) => void;
};
