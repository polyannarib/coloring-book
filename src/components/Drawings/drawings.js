import Link from "next/link";
import styles from "./drawings.module.scss";

export default function Drawings() {
    return (
        <div className={styles.optionsContainer}>
            <div className={styles.option}>
                <Link href="/beach"> Beach </Link>
            </div>
            <div className={styles.option}>
                <Link href="/flower"> Flower </Link>
            </div>
        </div>
    )
}