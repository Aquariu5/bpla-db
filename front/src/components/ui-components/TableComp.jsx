import { useState } from "react";
import { Table } from "react-bootstrap";
import cl from '../../styles/UI.module.css';
import { TableCell } from "./TableCell";
export const TableComp = ({header, body, onOver, onOut, onClick, propFlag, compareOpt, setCompareOpt, allSelected}) => {

    console.log('tablecomp');
    //console.log('compareoptintalbe', compareOpt);
    return (
        <Table striped bordered className={cl.Table}>
            <thead>
                <tr>
                    <td style={{background: 'white'}}>
                        {header}
                    </td>
                </tr>
            </thead>
            <tbody>
                {
                    //style={{background: !(el == name) ? selected: ''}}
                    Object.entries(body).map(([key, el]) => {
                        return (
                            <tr key={el} >
                                {
                                    propFlag ?
                                    // <td
                                    //     onMouseOver={() => onOver(true, el)}
                                    //     onMouseOut={() => onOut(false, el)}
                                    //     // onClick={() => onClick(el)}
                                    //     onClick={()  => {}}
                                    //     >
                                    //     {el}
                                    //     {key}
                                    // </td>
                                    <TableCell
                                        onOut={() => onOut(false, el)}
                                        onOver={() => onOver(true, el)}
                                        onClick={()  => onClick(el)}
                                        el={el}
                                        compareOpt={compareOpt}
                                        setCompareOpt={setCompareOpt}
                                        status={bool => {
                                            if (bool === 0) {
                                                //setSelected(selected - 1)
                                                allSelected('no');
                                            } 
                                            else {
                                                allSelected(bool)
                                            }
                                            // else if (!bool) {
                                            //     //setSelected(selected + 1)
                                            //     allSelected(bool);
                                            // }
                                            // else {
                                            //     allSelected(false);
                                            // }
                                        }
                                        }
                                    />
                                    :
                                    <td style={{fontSize: '14px'}}>
                                    {el}
                                    </td>
                                }

                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}