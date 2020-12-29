import { useState, useEffect } from 'react';

const useFetch = (initialUrl, skip = false) => {
  const apiUrl = window.siteSetting.dev ? window.siteSetting.testApiUrl : window.siteSetting.apiUrl;
  const [url] = useState(apiUrl + initialUrl);
  // const [params] = useState(initialParams);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (skip) return;
      setIsLoading(true);
      try {
        const response = await fetch(`${url}`);
        const result = await response.json();
        if (response.ok) {
          setData(result);
        } else {
          setHasError(true);
          setErrorMessage(result);
        }
      } catch (err) {
        setHasError(true);
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, hasError, errorMessage };
};
export default useFetch;
