import styles from "./flower.module.scss"

export default function Flower() {
    return (
        <div className={styles.flower}>
            <div className={styles.circle}></div>
            <div className={styles.petalsTop}>
                <div style={{top: 55, left: 55}}>
                    {/* <div></div> */}
                </div>
                <div style={{top: 35}}>
                {/* <div></div> */}
                </div>
                <div style={{top: 55, right: 55}}>
                {/* <div></div> */}
                </div>
            </div>

            <div className={styles.petalsMid}>
                <div style={{right: 35}}>
                    {/* <div></div> */}
                </div>
                <div style={{left: 35}}>
                    {/* <div></div> */}
                </div>
            </div>

            <div className={styles.petalsBottom}>
                <div style={{bottom: 55, left: 55}}>
                    {/* <div></div> */}
                </div>
                <div style={{bottom: 35}}>
                    {/* <div></div> */}
                </div>
                <div style={{right: 55, bottom: 55}}>
                    {/* <div></div> */}
                </div>
            </div>
        </div>
    )
}