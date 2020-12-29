import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

dayjs.locale('zh-hk');
const columns = [
  {
    name: 'Rule Name',
    sortable: true,
    selector: '_id',
    cell: (row) => (
      <div data-tag="allowRowEvents">
        <Link
          to={{
            pathname: `rules/edit/${row._id}`,
          }}
        >
          {row.ruleName}
        </Link>
      </div>
    ),
  },
  {
    name: 'Start Date',
    selector: 'startDate',
    sortable: true,
    cell: (row) => <div data-tag="allowRowEvents">{dayjs(row.startDate).format('YYYY-MM-DD')}</div>,
  },
  {
    name: 'End Date',
    selector: 'endDate',
    sortable: true,
    cell: (row) => <div data-tag="allowRowEvents">{dayjs(row.endDate).format('YYYY-MM-DD')}</div>,
  },
  {
    name: 'Description',
    selector: 'description',
    sortable: true,
  },
];

export default columns;
