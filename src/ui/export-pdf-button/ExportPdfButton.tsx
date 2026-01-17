import Button from '../button/Button';
import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { DataType, Column } from '@/app/reports/utils/columns';

pdfMake.vfs = vfsFonts.vfs;

type ExportPdfButtonProps<T> = {
  data: T[];
  columns: Column<T>[];
};

export default function ExportPdfButton({
  data,
  columns,
}: ExportPdfButtonProps<DataType>) {
  const exportPdf = () => {
    const tableHeader = columns.map((col) => ({
      text: col.header,
      style: 'tableHeader',
    }));

    const tableBody = data.map((row) =>
      columns.map((col) => row[col.accessorKey] ?? ''),
    );

    const docDefinition: TDocumentDefinitions = {
      pageOrientation: 'landscape',
      pageSize: 'A4',
      content: [
        {
          table: {
            headerRows: 1,
            widths: Array(columns.length).fill('*'),
            body: [tableHeader, ...tableBody],
          },
        },
      ],
      styles: {
        tableHeader: {
          fillColor: '#0b653b',
          color: '#ffffff',
          bold: true,
          fontSize: 12,
          alignment: 'center' as const,
        },
      },
      defaultStyle: {
        fillColor: '#daeae1',
        fontSize: 10,
        alignment: 'center' as const,
      },
    };

    pdfMake.createPdf(docDefinition).download('report.pdf');
  };

  return <Button onClick={exportPdf}>Экспорт в PDF</Button>;
}
