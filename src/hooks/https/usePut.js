import { useState, useCallback } from 'react';
import axios from 'axios';

const usePut = ({ url, headers, payload }) => {
  const [res, setRes] = useState({ data: null, isLoading: false, error: null });

  const callAPI = useCallback(() => {
    setRes((prevState) => ({ ...prevState, isLoading: true }));
    axios
      .put(process.env.REACT_APP_APIURL + url, payload)
      .then((response) => {
        setRes({ data: response.data, isLoading: false, error: null });
      })
      .catch((error) => {
        setRes({ data: null, isLoading: false, error });
      });
  }, [url, headers, payload]);
  return [res, callAPI];
};

export default usePut;
