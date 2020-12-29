import { useState, useCallback } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const usePost = ({ url, headers, payload }) => {
  const apiUrl = window.siteSetting.dev ? window.siteSetting.testApiUrl : window.siteSetting.apiUrl;
  const [res, setRes] = useState({ data: null, isLoading: false, error: null });
  const { enqueueSnackbar } = useSnackbar();

  const callAPI = useCallback(() => {
    setRes((prevState) => ({ ...prevState, isLoading: true }));
    axios
      .post(apiUrl + url, payload)
      .then((response) => {
        setRes({ data: response.data, isLoading: false, error: null });
        enqueueSnackbar('Added successful', {
          variant: 'success',
        });
      })
      .catch((error) => {
        setRes({ data: null, isLoading: false, error: error.response.data });
        enqueueSnackbar('Added Error', {
          variant: 'error',
        });
      });
  }, [url, headers, payload]);
  return [res, callAPI];
};

export default usePost;
