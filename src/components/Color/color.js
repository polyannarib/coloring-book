import { HexColorPicker, HexColorInput } from "react-colorful";
import styles from "./color.module.scss";

export default function Color(props) {

    return (
        <>
            <HexColorPicker
                style={{width: 300, height: 250}}
                color={props.color}
                onChange={props.change}
            />
            <HexColorInput
                className={styles.colorInput}
                color={props.color}
                onChange={props.change}
            />
        </>
    )
}