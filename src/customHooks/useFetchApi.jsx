import { useEffect, useState } from "react";

const useFetchApi = (url) => {
    const [apiData, setApiData] = useState(null);
    useEffect(() => {
        fetchData(url);
    }, []);

    const fetchData = async (url) => {
        const apiResponse = await fetch(url);
        const jsonData = await apiResponse.json();
        setApiData(jsonData);
    }
    return apiData;
}

export default useFetchApi;