import { useEffect } from "react";
import { useState } from "react";

function GameFetch(apiData) {
	const [gameDetail, fetchGame] = useState([])
	console.log("hi");
function GameCollector(apiData) {
	const Fetcher = (id) => {
		console.log(id);
		const x = async() => {
			try {
			console.log(id);
			const result = await fetch(`http://127.0.0.1:8000/${id}`);
			const finale = await result.json();
	               	console.log(finale);
			fetchGame(finale);
			}
			catch(err) {
				console.log("could not fetch ezra");
			}
	};

		x();
		};
		apiData.map(game => {Fetcher(game.id)});
	return (gameDetail);
	};

	let data = GameCollector(apiData);
	return(data);
};

export default GameFetch;
