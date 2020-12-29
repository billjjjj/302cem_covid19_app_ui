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
            pathname: `areas/edit/${row.id}`,
          }}
        >
          {row.id}
        </Link>
      </div>
    ),
  },
  {
    name: 'caseNo',
    selector: 'caseNo',
    sortable: true,
  },
  {
    name: 'District',
    selector: 'district',
    sortable: true,
  },
  {
    name: 'Building Name',
    selector: 'buildingName',
    sortable: true,
  },
];

export default columns;
