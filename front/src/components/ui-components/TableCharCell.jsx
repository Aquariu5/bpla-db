import { useState } from "react";
import {Button} from "react-bootstrap";
import Tooltip  from "@mui/material/Tooltip";
const TableCharString = ({title, header, char, saveValue, styleMode, body, styleIdx}) => {
    const [test, setTest] = useState('');
    const [value, setValue] = useState(body[char]);
    const [edit, setEdit] = useState(['','']);
    console.log('header, stylemode', header, styleMode);
    return (
        <tr>
        <td>{title}</td>
        {
            edit[0] != '' ?
            <td>

                <div>
                <input type='text' value={value} onChange={e => setValue(e.target.value)}></input>
                <Button onClick={() => {setEdit(['','']); saveValue(header, char, value)}}>ОК</Button>
                </div>
            </td>
            :
            <Tooltip title="Изменить" placement="left-start">
                <td style={{background: styleMode ? styleMode[styleIdx] : ''}} onClick={() => {setEdit(header, char);setValue(body[char])}}>{body[char]}</td>
            </Tooltip>
            
        }
        
        </tr>
    )
}

export default TableCharString;