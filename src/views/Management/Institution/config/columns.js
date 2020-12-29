import React from 'react';
import { Link } from 'react-router-dom';

const columns = [
  {
    name: 'Clinic',
    sortable: true,
    selector: 'clinic',
    cell: (row) => (
      <div data-tag="allowRowEvents">
        <Link
          to={{
            pathname: `institutions/edit/${row._id}`,
          }}
        >
          {row.clinic}
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
