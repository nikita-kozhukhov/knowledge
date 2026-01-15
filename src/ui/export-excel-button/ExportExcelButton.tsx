import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import Button from '../button/Button';
import { DataType, Column } from '@/app/reports/utils/columns';

type ExportExcelButtonProps<T> = {
  data: T[];
  columns: Column<T>[];
};

export default function ExportExcelButton({
  data,
  columns,
}: ExportExcelButtonProps<DataType>) {
  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Отчёт');

    // Колонки берём из columns
    worksheet.columns = columns.map((col) => ({
      header: col.header,
      key: col.accessorKey,
      width: 25,
    }));

    // Добавляем строки
    data.forEach((row) => {
      worksheet.addRow(row);
    });

    // Стили заголовка
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true };
    headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFDDEBF7' }, // светло-голубой фон
      };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
    });

    // Границы для всех строк
    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });
    });

    // Генерация файла
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    saveAs(blob, 'report.xlsx');
  };

  return <Button onClick={handleExport}>Экспорт в Excel</Button>;
}
