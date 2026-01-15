'use client';

import { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  SortingState,
} from '@tanstack/react-table';

import Pagination from '../pagination/Pagination';
import { DataType, Column } from '../../utils/columns';

import Input from '@/ui/input/Input';
import ExportExcelButton from '@/ui/export-excel-button/ExportExcelButton';
import ExportPdfButton from '@/ui/export-pdf-button/ExportPdfButton';

import styles from './Table.module.scss';

type TableProps = {
  data: DataType[];
  columns: Column<DataType>[];
};

export default function Table({ data, columns }: TableProps) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);

  const memoColumns = useMemo(() => columns, [columns]);
  const memoData = useMemo(() => data, [data]);

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: memoData,
    columns: memoColumns,
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,

    // фильтрация
    getFilteredRowModel: getFilteredRowModel(),

    // сортировка
    getSortedRowModel: getSortedRowModel(),

    // пагинация
    getPaginationRowModel: getPaginationRowModel(),

    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles['table-container']}>
      <div className={styles['actions-container']}>
        {/* поиск */}
        <Input
          value={globalFilter ?? ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Поиск..."
        />

        {/* Экспорт в Excel */}
        <ExportExcelButton data={memoData} columns={memoColumns} />

        {/* Экспорт в PDF */}
        <ExportPdfButton data={memoData} columns={memoColumns} />
      </div>

      <table className={styles.table}>
        <thead className={styles.header}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className={styles.row} key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const isSortable = header.column.getCanSort();
                const sortDir = header.column.getIsSorted();

                return (
                  <th
                    key={header.id}
                    className={`${styles['header-cell']} ${
                      isSortable ? styles.sortable : ''
                    }`}
                    onClick={
                      isSortable
                        ? header.column.getToggleSortingHandler()
                        : undefined
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}

                    {/* Иконка сортировки */}
                    {isSortable && (
                      <span className={styles.sortIcon}>
                        {sortDir === 'asc'
                          ? ' ▲'
                          : sortDir === 'desc'
                            ? ' ▼'
                            : ' ⇅'}
                      </span>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody className={styles.body}>
          {table.getRowModel().rows.map((row) => (
            <tr className={styles.row} key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className={styles.cell} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* пагинация */}
      <Pagination table={table} />
    </div>
  );
}
