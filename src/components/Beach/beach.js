import { useEffect } from "react";
import { useColor } from "react-color-palette";
import styles from "./beach.module.scss";
import Color from "../Color/color";

export default function Beach() {
    const [color, setColor] = useColor("hex", "#F7E7CE");
    const ids = ["circle", "sun", "sea", "sand-bottom", "sand-top", "cloud-right", "cloud-left"];

    useEffect(() => {
        document.body.style.backgroundColor = color.hex;
    }, []);

    function backgroundColor() {
        document.body.style.backgroundColor = color.hex;
    }

    function coloring(id) {
        if(ids.includes(id)) {
            if (id === "cloud-left" || id === "cloud-right") {
                let cloud = document.getElementById(id + "-2");
                cloud.querySelectorAll(":scope > div").forEach((elem) => {
                    elem.style.backgroundColor = color.hex;
                })
            }
            else {
                document.getElementById(id).style.backgroundColor = color.hex;
            }
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
            <div className={styles.circleContainer}>
                <div
                    id="circle"
                    onClick={(e) => coloring(e.target.id)}
                    className={styles.circle}
                >
                    <div
                        onClick={(e) => coloring(e.target.id)}
                        id="sand-bottom"
                        className={styles.sandBottom}
                    />
                    <div
                        onClick={(e) => coloring(e.target.id)}
                        id="sand-top"
                        className={styles.sandTop}
                    />
                    <div
                        onClick={(e) => coloring(e.target.id)}
                        id="sea"
                        className={styles.sea}
                    />
                    <div
                        onClick={(e) => coloring(e.target.id)}
                        id="sun"
                        className={styles.sun}
                    />
                    <div
                        onClick={() => coloring("cloud-left")}
                        className={styles.cloudContainer}
                        style={{bottom: "80%", right: 50}}
                        id="cloud-left"
                    >
                        <div id="cloud-left-2" className={styles.clouds}>
                            <div className={styles.cloudHelper}/>
                            <div />
                            <div />
                            <div />
                        </div>
                    </div>
                    <div
                        onClick={() => coloring("cloud-right")}
                        className={styles.cloudContainer}
                        style={{bottom: "60%", left: 80}}
                        id="cloud-right"
                    >
                        <div id="cloud-right-2" className={styles.clouds}>
                            <div className={styles.cloudHelper} />
                            <div />
                            <div />
                            <div />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}