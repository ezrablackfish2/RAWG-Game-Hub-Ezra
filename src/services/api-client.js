import { useEffect } from "react";
import { useState } from "react";


function ApiClient(error, setError, isLoading, setLoading, apiData, fetchApi) {
	const connect = () => console.log("Connecting");
	const disconnect = () => console.log("Disconnecting");
	function Api() {
		useEffect(() => {
			setLoading(true);
			document.title = "RAWG Ezra Games";
			connect();
			x();
			return() => disconnect();
		}, [])
		return (apiData);
	};
	
	const x = async() => {
		try {
			const result = await fetch("http://127.0.0.1:8000/");
			const finale = await result.json();
			fetchApi(finale);
			setLoading(false);
			console.log(finale);
		}
		catch(err) {
			setError("404 error page not found very sorry from ezra");
			setLoading(false);
		}
	};

	let data = Api();
	return (data)
};

export default ApiClient;
