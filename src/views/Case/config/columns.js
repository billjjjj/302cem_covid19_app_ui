import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

dayjs.locale('zh-hk');
const columns = [
  {
    name: 'Case No.',
    sortable: true,
    selector: 'caseNo',
    cell: (row) => (
      <div data-tag="allowRowEvents">
        <Link
          to={{
            pathname: `cases/edit/${row._id}`,
          }}
        >
          {row.caseNo}
        </Link>
      </div>
    ),
  },
  {
    name: 'Report Date',
    selector: 'reportDate',
    sortable: true,
    cell: (row) => (
      <div data-tag="allowRowEvents">{dayjs(row.reportDate).format('YYYY-MM-DD')}</div>
    ),
  },
  {
    name: 'Date Of Onset',
    selector: 'dateOfOnset',
    sortable: true,
    cell: (row) => (
      <div data-tag="allowRowEvents">{dayjs(row.dateOfOnset).format('YYYY-MM-DD')}</div>
    ),
  },
  {
    name: 'Gender',
    selector: 'gender',
    sortable: true,
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
  },
  {
    name: 'Resident',
    selector: 'resident',
    sortable: true,
  },
  {
    name: 'Classification',
    selector: 'classification',
    sortable: true,
  },
  {
    name: 'Confirmed',
    selector: 'confirmed',
    sortable: true,
    cell: (row) => <div data-tag="allowRowEvents">{row.confirmed ? '✅' : '--'}</div>,
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
  },
];

export default columns;
