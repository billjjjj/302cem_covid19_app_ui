import React from 'react';
import { Link } from 'react-router-dom';

const columns = [
  {
    name: 'ID',
    sortable: true,
    selector: 'id',
    cell: (row) => (
      <div data-tag="allowRowEvents">
        <Link
          to={{
            pathname: `cases/edit/${row.id}`,
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
  },
  {
    name: 'Date Of Onset',
    selector: 'dateOfOnset',
    sortable: true,
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
