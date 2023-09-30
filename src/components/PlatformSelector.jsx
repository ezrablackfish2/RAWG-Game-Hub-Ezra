import React, { useState } from "react";
import Platform from "./Platform";
import styles from "../App.module.css";

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: string;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform} : Props) {
	const platforms = Platform();

	function handleOptionChange(event) {
		onSelectPlatform(event.target.value);
	};
	return (
		<>
		<label htmlFor="platform"></label>
		<select className={styles.dropdownplat}id="platform" value={""} onChange={handleOptionChange}>
			<option value="">{selectedPlatform}</option>
			{platforms.map((option, index) => (
				<option key={index} value={option.title}>
				{option.title}
				</option>
			))}
		</select>
		</>
	);
};

export default PlatformSelector;
