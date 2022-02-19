import { useState } from "react";
import { Table, Button} from "react-bootstrap";
import cl from '../../styles/UI.module.css';
import TableCharString from "./TableCharCell";

export const TableChars = ({header, body, styleMode,/* onClick, edit, setEdit, value, setValue, */saveValue}) => {
    return (
        <Table striped bordered className={cl.Table}>
            <thead>
                <tr>
                    <td>
                        {header}
                    </td>
                </tr>
            </thead>
            <tbody>
                    <TableCharString
                        title='Размах крыльев'
                        header={header}
                        
                        char={'wing'}
                        // edit={edit}
                        // setEdit={setEdit}
                        saveValue={saveValue}
                        // value={value}
                        // setValue={setValue}
                        styleMode={styleMode}
                        body={body}
                    />
                    <TableCharString
                        title='Масса'
                        header={header}
                        
                        char={'weight'}
                        // edit={edit}
                        // setEdit={setEdit}
                        saveValue={saveValue}
                        // value={value}
                        // setValue={setValue}
                        styleMode={styleMode}
                        body={body}
                    />

                    <TableCharString
                        title='Макс. скорость'
                        header={header}
                        //value={value}
                        char={'vel'}
                        //edit={edit}
                        //setEdit={setEdit}
                        saveValue={saveValue}
                        //setValue={setValue}
                        styleMode={styleMode}
                        body={body}
                    />
                    
                    <TableCharString
                        title='Радиус действия'
                        header={header}
                        //value={value}
                        char={'radius'}
                        //edit={edit}
                        //setEdit={setEdit}
                        saveValue={saveValue}
                        //setValue={setValue}
                        styleMode={styleMode}
                        body={body}
                    />
                    <TableCharString
                        title='Тип двигателя'
                        header={header}
                        //value={value}
                        char={'engine'}
                        //edit={edit}
                        //setEdit={setEdit}
                        saveValue={saveValue}
                        //setValue={setValue}
                        styleMode={styleMode}
                        body={body}
                    />
                    <TableCharString
                        title='Длина'
                        header={header}
                        //value={value}
                        char={'length'}
                        //edit={edit}
                        //setEdit={setEdit}
                        saveValue={saveValue}
                        //setValue={setValue}
                        styleMode={styleMode}
                        body={body}
                    />
                    <TableCharString
                        title='Время полета'
                        header={header}
                        //value={value}
                        char={'duration'}
                        //edit={edit}
                        //setEdit={setEdit}
                        saveValue={saveValue}
                        //setValue={setValue}
                        styleMode={styleMode}
                        body={body}
                    />
                {/* <tr>
                    <td>Масса</td>
                    <td style={{background: styleMode ? styleMode[3] : ''}}>{body.weight}</td>
                </tr> */}
                {/* <tr>
                    <td>Макс. скорость</td>
                    <td style={{background: styleMode ? styleMode[3] : ''}}>{body.vel}</td>
                </tr>
                <tr>
                    <td>Радиус действия</td>
                    <td style={{background: styleMode ? styleMode[3] : ''}}>{body.radius}</td>
                </tr>
                <tr>
                    <td>Тип двигателя</td>
                    <td style={{background: styleMode ? styleMode[4] : ''}}>{body.engine}</td>
                </tr>
                <tr>
                    <td>Длина</td>
                    <td style={{background: styleMode ? styleMode[5] : ''}}>{body.length}</td>
                </tr>
                <tr>
                    <td>Время полета</td>
                    <td style={{background: styleMode ? styleMode[6] : ''}}>{body.duration}</td>
                </tr> */}
            </tbody>
        </Table>
    )
}