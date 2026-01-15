import { Table as ReactTable } from '@tanstack/react-table';

import Button from '@/ui/button/Button';
import Select from '@/ui/select/Select';

import styles from './Pagination.module.scss';

type PaginationProps<TData> = {
  table: ReactTable<TData>;
};

export default function Pagination<TData>({ table }: PaginationProps<TData>) {
  const pageSize = table.getState().pagination.pageSize;

  const options = [5, 10, 20, 30, 50].map((size) => ({
    value: size,
    label: `Показать ${size}`,
  }));

  return (
    <div className={styles.pagination}>
      <Button
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        « Первая
      </Button>

      <Button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        ‹ Назад
      </Button>

      <span>
        Страница {table.getState().pagination.pageIndex + 1} из{' '}
        {table.getPageCount()}
      </span>

      <Button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Вперёд ›
      </Button>

      <Button
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        Последняя »
      </Button>

      {/* select */}
      <Select
        value={pageSize}
        onChange={(val) => {
          if (typeof val === 'number') {
            table.setPageSize(val);
          }
        }}
        options={options}
      />
    </div>
  );
}
