import Genre from "./Genre.jsx";
import styles from "../App.module.css";
import { Button } from "@chakra-ui/react";

interface Props {
	onSelectGenre: (genre: Genre) => void;
}
function GenreList({ onSelectGenre }: Props) {
	const genres = Genre();
	return (
		<div className={styles.genre}>
		<ul>
		{genres.map(genre => <button onClick={() => onSelectGenre(genre.title)} key={genre.title} className={styles.genrelist}> <img className={styles.genreimage} src={genre.image}/><div className={styles.genretitle}> {genre.title}</div></button>)}
		</ul>
		</div>
	);
};

export default GenreList;
