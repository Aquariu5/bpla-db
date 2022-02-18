import { useState, memo } from "react";
import cl from '../../styles/UI.module.css'
import {Card} from 'react-bootstrap';
import { useCallback } from "react";
const Header = ({name}) => {
    console.log('nameheader', name);
    return (
        <Card className={cl.Header}>
            {name}
        </Card>
    )
}

export default memo(Header);