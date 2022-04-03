import { useEffect, useState } from "react";
import { useColor } from "react-color-palette";
import styles from "./beach.module.scss";
import Color from "../Color/color";

export default function Beach() {
    const [bgColor, setBgColor] = useState("#F7E7CE");
    const [color, setColor] = useColor("hex", "#121212");

    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
    });

    function chooseColor() {
        setBgColor(color)
        document.body.style.backgroundColor = bgColor;
    }

    return (
        <div className={styles.allContainer}>
            <div className={styles.colorContainer}>
                <Color toggle={setColor} coloring={color} />
                <button> Change background color </button>
            </div>
            <div className={styles.circleContainer}>
                <div className={styles.circle}>
                    <div className={styles.sandBottom} />
                    <div className={styles.sandTop} />
                    <div className={styles.sea} />
                    <div className={styles.sun} />
                    <div className={styles.clouds} style={{bottom: "80%", right: 50}}>
                        <div className={styles.cloudHelper}/>
                        <div />
                        <div />
                        <div />
                    </div>
                    <div className={styles.clouds} style={{bottom: "60%", left: 80}}>
                        <div className={styles.cloudHelper} />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </div>
        </div>
    )
}