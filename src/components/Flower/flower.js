import styles from "./flower.module.scss"
import { useEffect } from "react";
import { useColor } from "react-color-palette";
import Color from "../Color/color";

export default function Flower() {
    const [color, setColor] = useColor("hex", "#F7E7CE");
    const ids = ["petal-top-1", "petal-top-2", "petal-top-3", "petal-mid-1", "petal-mid-2",
                 "petal-bottom-1", "petal-bottom-2", "petal-bottom-3", "circle"];

    useEffect(() => {
        document.body.style.backgroundColor = color.hex;
    }, []);

    function backgroundColor() {
        document.body.style.backgroundColor = color.hex;
    }

    function coloring(id) {
        if(ids.includes(id)) {
            document.getElementById(id).style.backgroundColor = color.hex
        }
    }

    return (
        <div className={styles.allContainer}>
            <div className={styles.colorContainer}>
                <Color select={setColor} coloring={color} />
                <button
                    onClick={() => backgroundColor()}
                    className={styles.bgButton}
                >
                    Change background color
                </button>
            </div>
            <div className={styles.flowerContainer}>
                <div className={styles.flower}>
                    <div
                        onClick={(e) => coloring(e.target.id)}
                        id="circle"
                        className={styles.circle}
                    />
                    <div className={styles.petalsTop}>
                        <div
                            onClick={(e) => coloring(e.target.id)}
                            id="petal-top-1"
                            style={{top: 55, left: 55}}
                        />
                        <div
                            onClick={(e) => coloring(e.target.id)}
                            id="petal-top-2"
                            style={{top: 35}}
                        />
                        <div
                            onClick={(e) => coloring(e.target.id)}
                            id="petal-top-3"
                            style={{top: 55, right: 55}}
                        />
                    </div>

                    <div className={styles.petalsMid}>
                        <div
                            onClick={(e) => coloring(e.target.id)}
                            id="petal-mid-1"
                            style={{right: 35}}
                        />
                        <div
                            onClick={(e) => coloring(e.target.id)}
                            id="petal-mid-2"
                            style={{left: 35}}
                        />
                    </div>

                    <div className={styles.petalsBottom}>
                        <div
                            onClick={(e) => coloring(e.target.id)}
                            id="petal-bottom-1"
                            style={{bottom: 55, left: 55}}
                        />
                        <div
                            onClick={(e) => coloring(e.target.id)}
                            id="petal-bottom-2"
                            style={{bottom: 35}}
                        />
                        <div
                            onClick={(e) => coloring(e.target.id)}
                            id="petal-bottom-3"
                            style={{right: 55, bottom: 55}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}