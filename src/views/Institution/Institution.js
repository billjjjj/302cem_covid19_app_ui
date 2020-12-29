import React from 'react';
// mui
import { Button, CircularProgress } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DataTable from 'react-data-table-component';
// hooks
import { useFetch } from '../../hooks';
// table columns
import columns from './config/columns';

const Institution = (props) => {
  const { history } = props;
  const { data, isLoading } = useFetch('/institutions');
  const [resetPaginationToggle] = React.useState(false);

  const actionsMemo = React.useMemo(() => (
    <Button
      color="primary"
      aria-label="add a new institutions"
      variant="contained"
      onClick={() => history.push('/institutions/add')}
    >
      <AddCircleOutlineIcon /> Add Institution
    </Button>
  ));

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <DataTable
          title="Institution"
          columns={columns}
          data={data}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          persistTableHead
          actions={actionsMemo}
        />
      )}
    </div>
  );
};

export default Institution;
