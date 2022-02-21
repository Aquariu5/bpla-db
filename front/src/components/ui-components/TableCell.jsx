import { useCallback } from "react";
import { useEffect } from "react";
import { useState, memo} from "react";

const TableCell = ({onOver, onOut, onClick, el, compareOpt, status}) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (!compareOpt) {
            setSelected(false);
            status(0);
        }

    },[compareOpt])
    const onClickHandler = () => {
        if (compareOpt) {
            setSelected(!selected);
            status(el);
        }
        onClick()
    };
    return (
        <td style={{background: selected ? 'red' : ''}}
            onMouseOver={onOver}
            onMouseOut={onOut}
            onClick={onClickHandler}
            >
            {el}
        </td>
    )
}

export default TableCell;