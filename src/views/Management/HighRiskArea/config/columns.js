import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const columns = [
  {
    name: 'District',
    sortable: true,
    selector: 'district',
    cell: (row) => (
      <div data-tag="allowRowEvents">
        <Link
          to={{
            pathname: `areas/edit/${row._id}`,
          }}
        >
          {row.district}
        </Link>
      </div>
    ),
  },
  {
    name: 'Building Name',
    selector: 'buildingName',
    sortable: true,
  },
  {
    name: 'Last Date',
    selector: 'lastDate',
    sortable: true,
    cell: (row) => <div data-tag="allowRowEvents">{dayjs(row.lastDate).format('YYYY-MM-DD')}</div>,
  },
  {
    name: 'Case No.',
    selector: 'caseNo',
    sortable: true,
  },
];

export default columns;
