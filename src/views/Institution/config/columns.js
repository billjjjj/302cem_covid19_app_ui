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
            pathname: `institutions/edit/${row.id}`,
          }}
        >
          {row.id}
        </Link>
      </div>
    ),
  },
  {
    name: 'Region',
    selector: 'region',
    sortable: true,
  },
  {
    name: 'Clinic',
    selector: 'clinic',
    sortable: true,
  },
  {
    name: 'Address',
    selector: 'address',
    sortable: true,
  },
  {
    name: 'Phone',
    selector: 'phone',
    sortable: true,
  },
];

export default columns;
