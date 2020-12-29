import { useState, useCallback } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const usePut = ({ url, headers, payload }) => {
  const [res, setRes] = useState({ data: null, isLoading: false, error: null });
  const { enqueueSnackbar } = useSnackbar();

  const callAPI = useCallback(() => {
    setRes((prevState) => ({ ...prevState, isLoading: true }));
    axios
      .put(window.siteSetting.apiUrl + url, payload)
      .then((response) => {
        setRes({ data: response.data, isLoading: false, error: null });
        enqueueSnackbar('Update successful', {
          variant: 'success',
        });
      })
      .catch((error) => {
        setRes({ data: null, isLoading: false, error });
        enqueueSnackbar('Update Error', {
          variant: 'error',
        });
      });
  }, [url, headers, payload]);
  return [res, callAPI];
};

export default usePut;
