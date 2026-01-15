import { useState, useCallback } from 'react';
import { FilterValues } from './filterFormData';

type FilterableReport = {
  office?: string;
  position?: string;
  rating?: string | number;
};

export const useReportsFilter = <T extends FilterableReport>(
  sourceData: T[],
) => {
  const [filteredData, setFilteredData] = useState<T[]>(sourceData);

  const handleFilter = useCallback(
    (filters: FilterValues) => {
      const result = sourceData.filter((d) => {
        return (
          (!filters.office || d.office === filters.office) &&
          (!filters.position || d.position === filters.position) &&
          (!filters.rating || d.rating === filters.rating)
        );
      });
      setFilteredData(result);
    },
    [sourceData],
  );

  return {
    data: filteredData,
    handleFilter,
  };
};
