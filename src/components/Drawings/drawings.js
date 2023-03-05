import Link from "next/link";
import styles from "./drawings.module.scss";

export default function Drawings() {
    return (
        <div className={styles.optionsContainer}>
            <Link href="/beach">
                <div className={styles.option}>
                    Beach
                </div>
            </Link>

            <Link href="/flower">
                <div className={styles.option}>
                    Flower
                </div>
            </Link>
        </div>
    )
}