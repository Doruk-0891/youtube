
const useFetchApi = () => {

    const fetchData = async (url) => {
        const fetchingStates = {apiData: null, error: ''};
        try {
            const apiResponse = await fetch(url);
            const jsonData = await apiResponse.json();
            fetchingStates['apiData'] = jsonData;
            
        } catch (error) {
            fetchingStates['error'] = error.message;
        }
        return fetchingStates;
    }
    return {fetchData};
}

export default useFetchApi;