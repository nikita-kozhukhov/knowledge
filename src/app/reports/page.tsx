'use client';

import Table from './components/table/Table';
import FilterForm from './components/filterForm/FilterForm';
import { columns } from './utils/columns';
import { mockReportsData } from '@/api/mockReportsData';
import { useReportsFilter } from './utils/useReportsFilter';
import { useMemo } from 'react';

export default function Reports() {
  const { data, handleFilter } = useReportsFilter(mockReportsData);
  const tableColumns = useMemo(() => columns, []);

  return (
    <section style={{ width: '100%' }}>
      {/* Форма фильтрации */}
      <FilterForm onFilter={handleFilter} />

      {/* Таблица с фильтрованными данными */}
      <Table data={data} columns={tableColumns} />
    </section>
  );
}
