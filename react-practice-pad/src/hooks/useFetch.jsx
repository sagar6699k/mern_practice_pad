/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetchDataFromUrl();
  }, [url]);

  const fetchDataFromUrl = async () => {
    const res = await axios.get(url);
    setResult(res.data);
  };

  return [result, loading];
};

export default useFetch;
