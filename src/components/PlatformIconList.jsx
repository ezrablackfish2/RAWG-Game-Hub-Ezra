import React from "react"
import styles from "../App.module.css";
import {FaWindows, 
	FaPlaystation, 
	FaXbox, 
	FaApple, 
	FaLinux, 
	FaAndriod
} from "react-icons/fa";
import { Icon } from "@chakra-ui/react"
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs"
function PlatformIconList(game) {
	const iconMap = {
		windows: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		wIndows: FaWindows,
	}
	return (
		<>
		{game.platform.map(platform => <div className={styles.platform} key={platform.platform}><Icon className={styles.picon} as={iconMap[platform.platform]} /> </div>)}
		</>
	);

}

export default PlatformIconList;
