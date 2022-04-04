import { ColorPicker } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export default function Color(props) {

    return (
        <ColorPicker
        style={{zIndex: 3}}
        width={300} height={200} color={props.coloring} onChange={props.select}
        light hideHSV hideRGB
    />
    )
}