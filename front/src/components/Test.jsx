import { Button } from "react-bootstrap";
import { useState } from "react";

const [val, setVal] = useState(0);

const exec = () => {
    setVal(val + 1);
}
export const App = () => {
    return (
        <div>
            <Auth/>
            <Button onClick={exec} />
        </div>
    )
}