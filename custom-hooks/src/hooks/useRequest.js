import React from 'react';
import axios from 'axios';

const useRequest = (url) => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [errorMsg, setErrorMsg] = React.useState('');

  React.useEffect(() => {
    axios.get(url)
      .then(result => {
        setLoading(false);
        setData(result.data);
        setErrorMsg('');
      })
      .catch(err => {
        console.log(err);
        setErrorMsg('Error loading data');
        setLoading(false);
      });
  }, [url]);

  return { data, loading, errorMsg };
};

export default useRequest;
