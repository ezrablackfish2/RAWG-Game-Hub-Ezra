import logo from "../assets/search.gif";
import styles from "./NavBar.module.css"
import style from "../App.module.css";

interface Props {
	search: string;
	setSearch: () => void;

}

function NavBar( {setSearch, search} : Props ) {
	function handleSearch(event) {
		setSearch(event.target.value);
	};
        return (
                <>
		<form onSubmit={handleSearch} className={style}>
		<div className={style.search}>
		<label htmlFor="search" className={style.searchword}></label>
		<input onChange={handleSearch} id="search" placeholder="search games" type="text" className={style.searchbar} />
		<button className={style.searchbutton} type="submit">
		<div>Search</div>
		</button>
		</div>
		</form>
                </>
        );
}

export default NavBar;
