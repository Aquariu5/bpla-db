import { Button, ToggleButton, Navbar, Container, NavDropdown, Offcanvas} from 'react-bootstrap';

import { useState } from "react";
import Calendar from '../left/Calendar';
import DoDembelya from '../left/DoDembelya';
import Logo from '../left/Logo';
import LogOut from '../left/LogOut';

export const Left = ({show, handleShow, title, bodyText}) => {
    return (
        <Offcanvas show={show} onHide={handleShow}>
            <Offcanvas.Header closeButton >
                <Offcanvas.Title>
                    {title}
                </Offcanvas.Title >
            </Offcanvas.Header >
            < Offcanvas.Body >
                <Calendar/>
            <DoDembelya/>
            <Logo/>
            <LogOut/>
            </ Offcanvas.Body >
        </Offcanvas>
    )
}

