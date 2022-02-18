import { useState } from "react";
import { Container } from "react-bootstrap";
import cl from '../styles/Footer.module.css'
export const Footer = () => {
    const [test, setTest] = useState('');
    return (
        <div className={cl.Footer}>
            <span style={{color: 'skyblue', marginRight: '4px', font: '19px bold', paddingBottom: '3px'}}>Aquarius</span> 2021. All rights reserved
      </div>
    )
}