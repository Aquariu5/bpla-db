import { useSelector } from 'react-redux';
import Header from '../ui-components/Header'
// import cl from '../../../styles/Info.module.css';

import { useState, useMemo, useCallback } from 'react';
// import Image from '../../ui-components/Image';
import { Container, DropdownButton, Dropdown, Image, Pagination, Modal, Button} from 'react-bootstrap';
import { getCompareChars } from '../utils/compareChars';
import fs, { cp } from 'fs';
import { useEffect } from 'react';
import axios from 'axios';
import TableComp from '../ui-components/TableComp';
import { TableChars } from '../ui-components/TableChars';
//const fetch = require('node-fetch');
import cl from '../../styles/Countries.module.css'
import { AddModal } from '../modals/AddModal';
import { CompareModal } from '../modals/CompareModal';
export const Countries = (props) => {

    //let arr = countries;
    // let jsx = '';
    // for (let el of arr)
    // {
    //     let fields = el.to;
    //     jsx += <p>{el.name}</p>
    //     for (let fi of fields)
    //         jsx += <li>{fi}</li>
    // }

    let init = []
    const [body, setBody] = useState(init);
    const [str, setStr] = useState({ country: 'Россия', name: '' });
    const [isload, setLoad] = useState(false);
    const [countNames, setCountNames] = useState([]);
    const [countries, setCountries] = useState({});
    const [filteredCountries, setFilteredCountries] = useState({});
    const [urlName, setUrlName] = useState(''); // урл картинки для сервера
    const [name, setName] = useState(''); // имя бпла
    const [capture, setCaptureFile] = useState({}); // файл при добавлении
    const [visible, setVisible] = useState(false); // видимость картинки
    const [showModal, setShowModal] = useState(false); // видимость модалки

    const [showAddModal, setShowAddModal] = useState(false);
    const [showCompareModal, setShowCompareModal] = useState(false);
    const [chars2, setChars2] = useState([]);
    const [compareMode, setCompareMode] = useState([]);

    const [country, setCountry] = useState('Россия')
    const [chars, setChars] = useState({}); 
    const [compareOpt, setCompareOpt] = useState(false);

    const [allSelected, setAllSelected] = useState([]);

    const sortArr = ["По дате", 'По имени'];
    const [sort, setSort] = useState('По дате')

    const [edit, setEdit] = useState(['', '']);
    const [editValue, setEditValue] = useState('');
    useEffect(async () => {
        console.log('effect');
        setLoad(false);
        let fetchCounts;
        fetchCounts = await axios.get('http://localhost:5000/countries');
        fetchCounts = fetchCounts.data.countries;
        setCountries(JSON.parse(JSON.stringify(fetchCounts)));
        setFilteredCountries(JSON.parse(JSON.stringify(fetchCounts)));
        setCountNames(fetchCounts.map(el => el.name));
        setLoad(true);
        //console.log('countries', countries);
    }, [countries.length, showAddModal]);

    useEffect(async () => {
        console.log('effect2');
        if (countries != undefined && countries.length) {
            //console.log('Сработал');
            const cou = {
                "name": "США",
                "to": [
                          "RQ-11 Raven",
                          "Wasp III",
                          "RQ-20 Puma",
                          "RQ-16 T-Hawk",
                          "MQ-9 Reaper",
                          "RQ-4 Global Hawk",
                          "RQ-170 Sentinel"
                ]
      };

            if (sort == 'По имени') {


                //ИЗМЕНЯЕТ ИСХОДНЫЙ countries
                setFilteredCountries(() => {
                    let filcounts = JSON.parse(JSON.stringify(filteredCountries));
                    filcounts.map(c => {
                            c.to = c.to.sort();
                            return c;
                        });
                    return filcounts;
                })
            }

            else {
                setFilteredCountries(JSON.parse(JSON.stringify(countries)));
            }
        }

    }, [sort])

    //эффекта не дает, при наведении на ячейку компонент CompTable перерисовывается 12 раз!
    const showPic = useCallback((flag, name) => {
        setUrlName(`http://localhost:5000/image?name=${name}`);
        setVisible(flag);
        
    },[]);

    const compareTwo = useCallback(async () => {
        const names = allSelected;
        const char1 = await getChars(names[0]);
        const char2 = await getChars(names[1]);
        console.log('names', names);
        let results = getCompareChars(char1, char2);
        setCompareMode(results);
        setChars2([char1, char2]);
        console.log('results', results);
        setShowCompareModal(true);

    },[allSelected]);

    
    const setNameFunc = (e) => {
        setStr(prev => {
            return { ...prev, name: e.target.value };
        })
    }

    const getImage = async (name) => {
        console.log('infunc');
         let img = (await axios.get(`http://localhost:5000/image?name=${name}`)).data;
         console.log('img', img);
         return img;
    }



    const openModal = useCallback(async (name) => {

        if (compareOpt) { // если активирована опция
            return;
        }

        setShowModal(true);
        setName(name);
        let chars = await getChars(name);
        //console.log('chars', chars);
        setChars(chars);
    },[compareOpt]);

    const getChars = useCallback(async (name) => {
        console.log('before req', name);
        let chars = (await axios.get(`http://localhost:5000/info?name=${name}`)).data;
        return chars;
    },[]);

    const addNote = useCallback(() => {
        setShowAddModal(true);
    },[]);


    const add = () => {
        console.log('capt', capture);
        const data = new FormData();
        data.append('name', name);
        data.append('country', country);
        data.append('file', capture);
        console.log('data', data);
        axios.post('http://localhost:5000/uploadf', data);
        setShowAddModal(false);
        setName('');
    }

    const editHandler = useCallback((name, char) => {
        console.log('click', name, char);
        setEdit([name, char]);
    },[edit]);

    const saveValue = useCallback (async (name, char, value) => {
        console.log('name, char, val', name, char, value);
        let status = (await axios.get(`http://localhost:5000/editcell?name=${name}&char=${char}&value=${value}`)).data;
        console.log('status', status);
        if (status.status == 200) {
            console.log('success');
            let chars = await getChars(name)
            .then(res => {console.log('newchars', res);return res})
            .catch(e => {console.log('error', e); });
            if (!chars) {
                chars = await getChars(name);
            }
            setChars(chars);
        }
        else {
            console.log('fails', status.status);
        }


    },[chars]);

    const selectedHandler = useCallback((val) => {
        if (val === 'no') {

        }
        else if (allSelected.findIndex(el => val == el) == -1)
            setAllSelected([...allSelected, val])
        else
            setAllSelected([...allSelected].filter(el => el != val))
    },[allSelected]);

    return (
        isload ?
            <div className={cl.Countries}>
                <Header name="Страны лидеры по производству БПЛА" />
                <div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        {
                        filteredCountries.length ?
                        (
                            filteredCountries.map(count => {
                            return (
                                <TableComp
                                    
                                    header={count.name}
                                    body={count.to}
                                    onOver={(flag, name) => showPic(flag, name)}
                                    onOut={(flag, name) => showPic(flag, name)}
                                    onClick={(name) => openModal(name)}
                                    compareOpt={compareOpt}
                                    setCompareOpt={setCompareOpt}
                                    propFlag={true}
                                    allSelected = {val =>  selectedHandler(val)}
                                />
                            )

                        })
                        )
                        :
                        <p>Ждите</p>
                        }
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div>
                            <Button style={{margin: '10px'}} onClick={addNote}>+</Button>
                        </div>
                        
                        <div style={{marginLeft: '20px', display: 'flex'}}>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
                            Сортировать по
                            </div>
                            <DropdownButton
                                style={{margin: '10px'}}
                                title={sort}
                                onSelect={e => setSort(e)}
                            >
                            {
                                sortArr.map(el =>
                                    <Dropdown.Item
                                        key={el}
                                        eventKey={el}
                                    >
                                        {el}
                                    </Dropdown.Item>
                                    )
                            }
                            </DropdownButton>

                        </div>
                        <Container style={{marginLeft: '20vw'}}>
                            <Button variant="primary" onClick={e => {
                                if (compareOpt)
                                    setAllSelected([])
                                setCompareOpt(!compareOpt);

                            }
                            }>{compareOpt ? 'Отменить сравнение' : 'Сравнить'}</Button>
                        </Container>
                        <Container>
                            <Button variant="primary" disabled={!(allSelected.length == 2)} onClick={compareTwo}>Перейти к сравнению</Button>
                        </Container>
                    </div>
                    
                </div>
                    <div style={{display: visible ? 'flex' : 'none'}}>
                        <Image src={urlName} style={{width: '320px', height: '240px'}} />
                    </div>
                    <Modal
                        show ={ showModal }
                        onHide={() => setShowModal(false)}
                        backdrop =" static "
                        keyboard ={ false }
                    >
                        < Modal.Header closeButton >
                        < Modal.Title > {name}</ Modal.Title >
                        </ Modal.Header >
                        < Modal.Body >
                            <TableChars
                                header={name}
                                body={chars}
                                onClick={editHandler}
                                edit={edit}
                                setEdit={setEdit}
                                value={editValue}
                                setValue={setEditValue}
                                saveValue={saveValue}
                            />
                            <Image src={urlName} style={{width: '320px', height: '240px', margin: '10px'}} />
                        </Modal.Body >
                    </ Modal >

                    <AddModal
                        show={showAddModal}
                        setShow={setShowAddModal}
                        setItem={setCountry}
                        item={country}
                        title="Добавить"
                        countries={countNames}
                        name={name}
                        setName={setName}
                        setCaptureFile={setCaptureFile}
                        capture={capture}
                        add={add}
                    />

                    <CompareModal
                        show={showCompareModal}
                        setShow={setShowCompareModal}
                        names={allSelected}
                        chars={chars2}
                        compareMode={compareMode}
                        title={"Сравнение"}
                    />
            </div>
            :
            <div>
                Падажжи
            </div>
            
    );
}
