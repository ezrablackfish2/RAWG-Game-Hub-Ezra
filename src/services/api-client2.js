import { useEffect } from "react";
import { useState } from "react";



function ApiClient2(apiData, oneGame, setGame) {
	let [freeState, setFree] = useState([]);
	let free = []
	let i = 0;
	console.log("ezra{");
	console.log(apiData[0]);
	while (i < 10) {
		free.push(apiData[i]);
		i += 1;
	}
	console.log("}ezra");

	function Api() {
		let id = "d547117d-ce84-4428-b533-42a2fe5ebeef";
		console.log(id)
		useEffect(() => {
			document.title = "RAWG Ezra Games";
			y(id);
			return() => console.log("disconnected");
		}, [])
		let apiData = oneGame;
		return (apiData);
	
	};
	const y = async(id) => {
		console.log(id);
		try {
			const result = await fetch(`http://127.0.0.1:8000/${id}`);
			const finale = await result.json();
			console.log(finale);
			setGame(finale);
		}
		catch(err) {
		}
	};

	let data = Api();
	return (data)
};

export default ApiClient2;
