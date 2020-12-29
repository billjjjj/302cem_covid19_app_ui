import React from 'react';
// mui
import { Button, CircularProgress } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DataTable from 'react-data-table-component';
// hooks
import { useFetch } from '../../hooks';
// table columns
import columns from './config/columns';

const HighRiskArea = (props) => {
  const { history } = props;
  const { data, isLoading } = useFetch('/areas');
  const [resetPaginationToggle] = React.useState(false);

  const actionsMemo = React.useMemo(() => (
    <Button
      color="primary"
      aria-label="add a new areas"
      variant="contained"
      onClick={() => history.push('/areas/add')}
    >
      <AddCircleOutlineIcon /> Add Areas
    </Button>
  ));

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <DataTable
          title="Areas"
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

export default HighRiskArea;
