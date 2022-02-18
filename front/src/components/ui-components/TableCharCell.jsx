import { useState } from "react";
import {Button} from "react-bootstrap";
const TableCharCell = ({title, header, char, saveValue, styleMode, body}) => {
    const [test, setTest] = useState('');
    const [value, setValue] = useState(body[char]);
    const [edit, setEdit] = useState(['','']);
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
            <td style={{background: styleMode ? styleMode[0] : ''}} onClick={() => {setEdit(header, char);setValue(body[char])}}>{body[char]}</td>
        }
        
        </tr>
    )
}

export default TableCharCell;