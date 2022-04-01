import styles from "./beach.module.scss"

export default function Beach() {
    return (
        <div className={styles.container}>
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
    )
}