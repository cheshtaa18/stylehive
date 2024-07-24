import {useEffect, useState} from "react";
import axios from "axios";
import {makeRequest} from "../makeRequest.js"
const useFetch = (url)=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [err, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const res = await makeRequest.get(url);
            setData(res.data.data);
          } catch (err) {
            setError(true);
          }
          setLoading(false);
        };
        fetchData();
      }, [url]);
    return {data, loading, err};
}

export default useFetch;
