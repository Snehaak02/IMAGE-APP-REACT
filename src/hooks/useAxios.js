import axios from "axios";
import { useEffect, useState } from "react"

const useAxios = (param) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL='https://api.unsplash.com';

    const fetchData = async (url) => {
        try {
            setisLoading(true);
            const res = await axios(url);
            setResponse(res.data.results);
        } catch(err) {
            setError(err)
        } finally {
            setisLoading(false)
        }
    } 

    useEffect(() => {
        fetchData(param);
    }, [param])

     return {
       response, 
       isLoading,
       error,
       fetchData: url =>fetchData(url)
    }   
}

export default useAxios