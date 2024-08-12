import { useEffect, useState } from 'react';

function useFetch(dataApi, options = {}) {
  const [loading, setLoading] = useState(false);
  const [fetchData, setFetchData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  async function fetchApiData() {
    setLoading(true);
    try {
      const data = await fetch(dataApi, { ...options });
      if (!data.ok) throw new Error(data.statusText);
      const response = await data.json();
      if (response) {
        setFetchData(response);
        setErrorMsg(null);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setFetchData(null);
      setLoading(false);
      setErrorMsg(error);
    }
  }

  useEffect(() => {
    fetchApiData();
  }, [dataApi]);

  return {
    fetchData,
    loading,
    errorMsg,
  };
}

export default useFetch;
