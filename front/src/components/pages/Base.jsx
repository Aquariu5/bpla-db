import { useState } from "react";
import { Button, ToggleButton, Navbar, Container, NavDropdown, Offcanvas, Card, Pagination} from 'react-bootstrap';
import { TableComp } from "../ui-components/TableComp";
import cl from '../../styles/Base.module.css'
import Header from "../ui-components/Header";
import { useHistory } from "react-router-dom";
import { base } from "../dataBase/base.js";
import {keys} from "../dataBase/keys.js"
export const Base = () => {
    const [test, setTest] = useState('');
    //const body = ['Размах крыльев', "Масса", "Макс. скорость", "Радиус действия", "Тип двигателя", "Длина", "Время полета"];
    const history = useHistory();
    let keysarr = keys.map(el => <li>Поле {el.from} ссылается на {el.to}</li>)
    const pages = base.length / 5;
    const [page, setPage] = useState(1)
    const [visibleBase, setVisibleBase] = useState(base.slice(0, 5));
    console.log('visible', visibleBase);
    const showBase = (numPage) => {
        setPage(numPage);
        let porc = Math.ceil(base.length / pages);
        let start = porc * (numPage - 1);
        let end = start + porc;
        let piece = base.slice(start, end);
        setVisibleBase(piece);
        console.log('start end', start, end);
    }

    return (
        <div >
            <Header name="База данных системной модуляции" />
            <Container className={cl.TableContainer}>
                {
                    visibleBase.map(el => <TableComp header={el.name} body={el.fields} propFlag={false} />)
                }
                {/* <TableComp header="БПЛА" body={body} propFlag={false} />
                <TableComp header="БПЛА" body={body} propFlag={false}/>
                <TableComp header="БПЛА" body={body} propFlag={false}/>
                <TableComp header="БПЛА" body={body} propFlag={false}/>
                <TableComp header="БПЛА" body={body} propFlag={false}/>
                <TableComp header="БПЛА" body={body} propFlag={false}/>
                <TableComp header="БПЛА" body={body} propFlag={false}/> */}

            </Container>
            <Pagination style={{display: 'flex', justifyContent: 'center', paddingRight: '63vw'}}>
                {
                    [...Array(Math.ceil(pages)).keys()].map(num => <Pagination.Item key={num} onClick={() => showBase(num + 1)}>{num + 1}</Pagination.Item>)
                }
            </Pagination>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button onClick={() => history.push('/countries')}>Страны</Button>
            </div>

        </div>

    )
}