import styles from "../App.module.css";

function colorMode(mode) {
	if (mode)
	{
		return (styles.white);
	}
	return (styles.dark);
};

export default colorMode;
