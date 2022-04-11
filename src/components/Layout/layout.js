import Link from "next/link";
import styles from "./layout.module.scss";

export default function Layout() {
    return (
        <div className={styles.back}>
            <Link href="/"> Back </Link>
        </div>
    )
}