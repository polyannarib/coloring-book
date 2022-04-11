import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <div className={styles.git}>
            <Link
                href="https://github.com/polyannarib/coloring-book"
                passHref
            >
                <a target="_blank"> GitHub @polyannarib </a>
            </Link>
        </div>
    )
}