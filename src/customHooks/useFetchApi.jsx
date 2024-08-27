import { useEffect, useState } from "react";

const useFetchApi = (url) => {
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchData(url);
    }, [url]);

    const fetchData = async (url) => {
        try {
            setLoading(true);
            const apiResponse = await fetch(url);
            const jsonData = await apiResponse.json();
            setApiData(jsonData);
            
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    return {apiData, error, loading};
}

export default useFetchApi;