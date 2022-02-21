import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const TableCell = ({onOver, onOut, onClick, el, compareOpt, status}) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (!compareOpt) {
            setSelected(false);
            status(0);
        }

    },[])
    const onClickHandler = useCallback(() => {
        if (compareOpt) {
            setSelected(!selected);
            status(el);
        }
        onClick()
    },[selected]);
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