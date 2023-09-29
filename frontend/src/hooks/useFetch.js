import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log('Fetchind data from:',url)
        const res = await fetch(url);

        if (!res.ok) {
          setError("Failed to fetch");
          alert("Failed to fetch");
        }
        const result = await res.json();
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    error,
    loading
  };
};

export default useFetch;
