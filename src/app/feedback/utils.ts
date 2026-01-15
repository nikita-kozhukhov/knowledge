import { z } from 'zod';

export const feedbackSchema = z.object({
  name: z.string().min(2, 'Введите имя'),
  email: z.email('Некорректная почта'),
  city: z.string().min(1, 'Выберите город'),
  comment: z.string().min(5, 'Комментарий слишком короткий'),
  file: z.custom<File | null>().nullable(),
});

export type FeedbackFormValues = z.infer<typeof feedbackSchema>;

type City = {
  value: string;
  label: string;
};

export const cityOptions: City[] = [
  { value: 'Москва', label: 'Москва' },
  { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
  { value: 'Казань', label: 'Казань' },
];
