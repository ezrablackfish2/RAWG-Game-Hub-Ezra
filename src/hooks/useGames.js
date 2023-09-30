import { useState } from "react"; 
import apiClient from "../services/api-client-axios.js";
import { useEffect } from "react";

function useGames(selectedGenre: Genre | null, requestConfig?: AxiosRequestConfig, deps?: any[]) {
        const [games, setGames ] = useState([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false);

        useEffect(() => {
	
		setLoading(true);
                apiClient.get("", { ...requestConfig })
                        .then(res =>  {
				setGames(res.data);
				setLoading(false);
			})
                        .catch(err =>{
				setError(err.message)
				setLoading(false);
			});

        }, deps ? [...deps] : []);
	return {games, error, isLoading};
};

export default useGames;
