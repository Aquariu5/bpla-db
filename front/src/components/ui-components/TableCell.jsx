import { useEffect } from "react";
import { useState } from "react";

export const TableCell = ({onOver, onOut, onClick, el, compareOpt, status}) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if (!compareOpt) {
            setSelected(false);
            status(0);
        }

    })

    return (
        <td style={{background: selected ? 'red' : ''}}
            onMouseOver={onOver}
            onMouseOut={onOut}
            // onClick={() => onClick(el)}
            onClick={()  => { 
                if (compareOpt) {
                    // console.log('option on');
                    // console.log('status 1');
                    setSelected(!selected);
                    status(el);
                }
                // else {
                //     console.log('option off');
                //     setSelected(false);
                //     console.log('status 0');
                //     status(0);
                // }
                onClick()
            }}
            >
            {el}
        </td>
    )
}