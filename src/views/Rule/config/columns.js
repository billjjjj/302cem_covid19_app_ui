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
            pathname: `rules/edit/${row.id}`,
          }}
        >
          {row.id}
        </Link>
      </div>
    ),
  },
  {
    name: 'Rule Name',
    selector: 'ruleName',
    sortable: true,
  },
  {
    name: 'Start Date',
    selector: 'startDate',
    sortable: true,
  },
  {
    name: 'End Date',
    selector: 'endDate',
    sortable: true,
  },
  {
    name: 'Description',
    selector: 'description',
    sortable: true,
  },
];

export default columns;
