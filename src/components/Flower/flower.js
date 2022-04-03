import styles from "./flower.module.scss"
import { useEffect, useState } from "react";
import Color from "../Color/color";

export default function Flower() {
    const [color, setColor] = useState("#F7E7CE");

    useEffect(() => {
        document.body.style.backgroundColor = color;
    });

    function setBgColor() {
        setColor("#000")
    }
    return (
        <div className={styles.allContainer}>
            <Color />
            <div className={styles.flowerContainer}>
                <div className={styles.flower}>
                    <div className={styles.circle}></div>
                    <div className={styles.petalsTop}>
                        <div style={{top: 55, left: 55}}>
                        </div>
                        <div style={{top: 35}}>
                        </div>
                        <div style={{top: 55, right: 55}}>
                        </div>
                    </div>

                    <div className={styles.petalsMid}>
                        <div style={{right: 35}}>
                        </div>
                        <div style={{left: 35}}>
                        </div>
                    </div>

                    <div className={styles.petalsBottom}>
                        <div style={{bottom: 55, left: 55}}>
                        </div>
                        <div style={{bottom: 35}}>
                        </div>
                        <div style={{right: 55, bottom: 55}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}