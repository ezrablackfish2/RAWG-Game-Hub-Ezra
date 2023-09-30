import styles from "../App.module.css";
import on from "../assets/thumbs_up.png";
import off from "../assets/thumbs_down.png";

interface Props {
	mode: boolean;
	setMode:() => void;
}

function ColorModeSwitch({mode, setMode}: Props) {
        if (mode)
        {
                return (
                        <>

                        <div className={styles.colorMode}onClick={() => setMode(false)}> <img src={on} className={styles.onoff} />
                        </div><div className={styles.mode}>White Mode</div>
                        </>
                );
        }
        return (
                <>
                <div className={styles.colorMode}onClick={()=>setMode(true)}><img src={off} className={styles.onoff} />
                </div>
                <div className={styles.mode}>Dark Mode
                </div>
                </>
                );
};

export default ColorModeSwitch;
