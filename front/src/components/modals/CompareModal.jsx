import { useEffect } from "react";
import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import { TableChars } from "../ui-components/TableChars";
export const CompareModal = ({title, show, setShow, names, chars, compareMode}) => {

    // let forFirst = [];
    // let forSecond = [];
    const [forFirst, setForFirst] = useState([]);
    const [forSecond, setForSecond] = useState([]);

    useEffect(() => {
        if (compareMode.length) {
            let forFirst = [];
            let forSecond = [];
            compareMode.forEach(elem => {
                forFirst.push(elem.split(',')[0]);
                forSecond.push(elem.split(',')[1]);
            })
            setForFirst(forFirst);
            setForSecond(forSecond);
        }

    }, [compareMode])
    return (
        <Modal
            show ={ show }
            onHide={() => setShow(false)}
            backdrop =" static "
            keyboard ={ false }
            size ="xl"
        >
            < Modal.Header closeButton >
                < Modal.Title > {title}</ Modal.Title >
            </ Modal.Header >
            <Modal.Body>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <TableChars
                    header={names[0]}
                    body={chars[0]}
                    styleMode={forFirst}
                />
                <TableChars
                    header={names[1]}
                    body={chars[1]}
                    styleMode={forSecond}
                />
                </div>
            </Modal.Body >
        </ Modal >
    )
}