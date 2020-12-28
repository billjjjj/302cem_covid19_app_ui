import { useState, useCallback } from 'react';
import axios from 'axios';

const useDelete = ({ url, headers }) => {
  const [res, setRes] = useState({ data: null, isLoading: false, error: null });

  const callAPI = useCallback(() => {
    setRes((prevState) => ({ ...prevState, isLoading: true }));
    axios
      .delete(process.env.REACT_APP_APIURL + url)
      .then((response) => {
        setRes({ data: response.data, isLoading: false, error: null });
      })
      .catch((error) => {
        setRes({ data: null, isLoading: false, error });
      });
  }, [url, headers]);
  return [res, callAPI];
};

export default useDelete;
