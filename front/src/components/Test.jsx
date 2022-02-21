import { Button } from "react-bootstrap";
import { useState } from "react";
import { useCallback } from "react";




export const Test = () => {
    const [val, setVal] = useState('v');
    console.log('val', val);
    const exec = useCallback((vall) => {
        // console.log('valinexec', val);
        // vall = val;
        console.log('testtiele', vall);
    },[]);
    const handler = (e) => setVal(e.target.value);
    return (
        <div>
            <input onChange={handler} value={val}/>
            <Button onClick={() => exec(val)}>Click</Button>
        </div>
    )
}