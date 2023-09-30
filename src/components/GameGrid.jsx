import useGames from "../hooks/useGames.js";
import styles from "../App.module.css";
import spinner from "../assets/loadingAnimation.gif";
import PlatformIconList from "./PlatformIconList.jsx";
import Rating from "./Rating.jsx";
import GameCardSkeleton from "./GameCardSkeleton.jsx";

interface Props {
	selectedGenre: Genre | null,
	selectedPlatform: Platform | null,
	selectedSort: Sort | null,
	setSearch: Search | null,
	search: string
}

function GameGrid({ selectedGenre, selectedPlatform, selectedSort, setSearch, search }: Props) {
	console.log(selectedSort)
const {games, error, isLoading} = useGames(selectedGenre, { params: { genres: selectedGenre?.title}}, [selectedGenre?.title]);
const skeletons = [1, 2, 3, 4, 5, 6];
	function Shower() {
		if (selectedGenre == "All" && selectedPlatform == "All")
		{
			return(
			<>
			{games
				.sort( (a, b) => 
			(selectedSort == "Name" ? (a.title > b.title ? 1: -1) : null) ||
			(selectedSort == "Year" ? (a.release_date > b.release_date ? -1: 1) : null) ||
			(selectedSort == "Metascore" ? (a.metascore > b.metascore ? -1: 1) : null) ||
			(selectedSort == "Certificate" ? (a.certificate > b.certificate ? 1: -1) : null)
			)
				.filter((game) => {
					return search.toLowerCase() === ""
					? game
					: game.title.toLowerCase().includes(search);
				})
				.map(game => (
	                  <li key={game.id} className={styles.gamelists}>
	                  <div className={styles.oneGame}>
	       	           <div><img className={styles.gameCover}src={game.cover} /></div>
	                  <div className={styles.gameTitle}>{game.title} 
			
			</div>
			<div>
			<ul>
			{PlatformIconList(game)}
			</ul>
			<div className={styles.metacritic}>
			{Rating(game)}
			</div>
			</div>
       	          </div>
			</li>
		))};
				</>

			);
		}

		if (selectedGenre != "All" && selectedPlatform == "All") {
			return(
			<>
			{games
				.sort( (a, b) =>
                        (selectedSort == "Name" ? (a.title > b.title ? 1: -1) : null) ||
                        (selectedSort == "Year" ? (a.release_date > b.release_date ? -1: 1) : null) ||
                        (selectedSort == "Metascore" ? (a.metascore > b.metascore ? -1: 1) : null) ||
                        (selectedSort == "Certificate" ? (a.certificate > b.certificate ? 1: -1) : null)
                        )
				.filter((game) => {
                                        return search.toLowerCase() === ""
                                        ? game
                                        : game.title.toLowerCase().includes(search);
                                })
				.filter(game => {
				let i = 0;
				while (game.genra[i]) {
					if (game.genra[i].genre == selectedGenre) {
						console.log(game.title)
						return(game.genra[i].genre.includes(selectedGenre))
					}
					i += 1;
				}
				})
				.map(game => (
	                  <li className={styles.gamelists}>

				  <div className={styles.oneGame}>
				  <div><img className={styles.gameCover}src={game.cover} /></div>
				  <div className={styles.gameTitle}>
				  <div key={game.genra}>
				  <div>
				  </div> 
				  {game.title}
				  </div>
				  </div>
				  <div>
				  <ul>{PlatformIconList(game)}</ul>
				  <div className={styles.metacritic}>{Rating(game)}</div>
				  </div>
				  </div>
			</li>
		))};
			</>

			);
		}

		if (selectedGenre != "All" && selectedPlatform != "All") {
			return(
			<>
			{games
				.sort( (a, b) =>
                        (selectedSort == "Name" ? (a.title > b.title ? 1: -1) : null) ||
                        (selectedSort == "Year" ? (a.release_date > b.release_date ? -1: 1) : null) ||
                        (selectedSort == "metascore" ? (a.metascore > b.metascore ? -1: 1) : null) ||
                        (selectedSort == "certificate" ? (a.certificate > b.certificate ? 1: -1) : null)
                        )
				.filter((game) => {
                                        return search.toLowerCase() === ""
                                        ? game
                                        : game.title.toLowerCase().includes(search);
                                })
				.filter(game => {
                                let i = 0;
                                while (game.platform[i]) {
                                        if (game.platform[i].platform == selectedPlatform) {
                                                console.log(game.title)
                                                return(game.platform[i].platform.includes(selectedPlatform))
                                        }
                                        i += 1;
                                }
                                })
				.filter(game => {
				let i = 0;
				while (game.genra[i]) {
					if (game.genra[i].genre == selectedGenre) {
						console.log(game.title)
						return(game.genra[i].genre.includes(selectedGenre))
					}
					i += 1;
				}
				})
				.map(game => (
	                  <li className={styles.gamelists}>

				  <div className={styles.oneGame}>
				  <div><img className={styles.gameCover}src={game.cover} /></div>
				  <div className={styles.gameTitle}>
				  <div key={game.genra}>
				  <div>
				  </div> 
				  {game.title}
				  </div>
				  </div>
				  <div>
				  <ul>{PlatformIconList(game)}</ul>
				  <div className={styles.metacritic}>{Rating(game)}</div>
				  </div>
				  </div>
			</li>
		))};
			</>

			);
		}



		if (selectedGenre == "All" && selectedPlatform != "All") {
			return(
			<>
			{games
				.sort( (a, b) =>
                        (selectedSort === "Name" ? (a.title > b.title ? 1: -1) : null) ||
                        (selectedSort == "Year" ? (a.release_date > b.release_date ? -1: 1) : null) ||
                        (selectedSort == "Metascore" ? (a.metascore > b.metascore ? -1: 1) : null) ||
                        (selectedSort == "Certificate" ? (a.certificate > b.certificate ? 1: -1) : null)
                        )
				.filter((game) => {
                                        return search.toLowerCase() === ""
                                        ? game
                                        : game.title.toLowerCase().includes(search);
                                })
				.filter(game => {
				let i = 0;
				while (game.platform[i]) {
					if (game.platform[i].platform == selectedPlatform) {
						console.log(game.title)
						return(game.platform[i].platform.includes(selectedPlatform))
					}
					i += 1;
				}
				})
				.map(game => (
	                  <li className={styles.gamelists}>

				  <div className={styles.oneGame}>
				  <div><img className={styles.gameCover}src={game.cover} /></div>
				  <div className={styles.gameTitle}>
				  <div key={game.genra}>
				  <div>
				  </div> 
				  {game.title}
				  </div>
				  </div>
				  <div>
				  <ul>{PlatformIconList(game)}</ul>
				  <div className={styles.metacritic}>{Rating(game)}</div>
				  </div>
				  </div>
			</li>
		))};
			</>

			);
		}

	}

return (
	<>
	<ol className={styles.games}> 
	{error && <p> Ezra site request error code 77 </p>} 
	{isLoading && <img src={spinner} className={styles.load} />}  
	<Shower />
       		 </ol>
	</>
);
};

export default GameGrid;
