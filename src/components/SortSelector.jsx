import React, { useState } from "react";
import styles from "../App.module.css";

interface Props {
	onSelectSort: (sort: sort) => void;
	selectedSort: string;
}

function SortSelector( {onSelectSort, selectedSort} : Props) {
	const sorts = ["Name", "Year", "Certificate", "Metascore"]
	function handleOptionChange(event) {
                onSelectSort(event.target.value);
        };
	return (
		                <>
                <label htmlFor="platform"></label>
                <select className={styles.sorter} id="platform" value={""} onChange={handleOptionChange}>
                        <option value="">Order By: {selectedSort} </option>
                        {sorts.map((option, index) => (
                                <option key={index} value={option.title}>
                                {option}
                                </option>
                        ))}
                </select>
                </>
	);
}
export default SortSelector;
