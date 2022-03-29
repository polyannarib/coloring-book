import styles from "./header.module.scss"

export default function Header(props) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.overlap} />
                <div className={styles.header}>
                        <div>
                            <span> C </span>
                            <span> O </span>
                            <span> L </span>
                            <span> O </span>
                            <span> R </span>
                            <span> I </span>
                            <span> N </span>
                            <span> G </span>
                        </div>
                        <div>
                            <span> B </span>
                            <span> O </span>
                            <span> O </span>
                            <span> K </span>
                        </div>
                </div>
            </div>
            {props.children}
        </>
    )
}