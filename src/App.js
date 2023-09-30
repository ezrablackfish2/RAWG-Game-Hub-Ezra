import styles from "./App.module.css";
import NavBar from "./components/NavBar.jsx";
import { useState } from "react";
import on from "./assets/thumbs_up.gif";
import off from "./assets/thumbs_down.png";
import ApiClient from "./services/api-client.js";
import colorMode from "./components/colorMode.jsx";
import ColorModeSwitch from "./components/colorModeSwitch";
import spinner from "./assets/loadingAnimation.gif";
import GameFetch from "./services/gameFetch.jsx";
import { useEffect } from "react";
import ApiClient2 from "./services/api-client2.js";
import GameGrid from "./components/GameGrid.jsx";
import GenreList from "./components/GenreList.jsx";
import PlatformSelector from "./components/PlatformSelector.jsx";
import SortSelector from "./components/SortSelector.jsx";

function App() {
        const [mode, setMode] = useState(true);
	const [selectedGenre, setSelectedGenre] = useState("All");
	const [selectedPlatform, setSelectedPlatform] = useState("All");
	const [selectedSort, setSelectedSort] = useState("Name");
	const [search, setSearch] = useState("");
	document.title = "GameHub Ezra"
return (
  <>
	  <div className={colorMode(mode)}>
	  	<div className={styles.nav}>
		  	<NavBar search={search} setSearch={setSearch}/>
			{console.log(search)}
	  		<ColorModeSwitch mode={mode} setMode={setMode}/>
		  </div>
		  <div className={styles.aside}>
	<GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
	</div>
		  <div className={styles.main}>
	  <div></div>
	<div>

	</div>
	<div className={styles.central}>
	<SortSelector selectedSort={selectedSort} onSelectSort={sort => setSelectedSort(sort)}/>
	<PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
	<GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} selectedSort={selectedSort} setSearch={setSearch} search={search} />
	<div className={styles.bottomfile}></div>
        </div>
	  </div>
	  </div>
  </>
  );
}

export default App;
