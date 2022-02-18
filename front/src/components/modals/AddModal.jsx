import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
export const AddModal = ({show, setShow, item, setItem, name, capture, setCaptureFile, setName, title, countries, add}) => {
    const [test, setTest] = useState('');
    return (
        <Modal
            show ={ show }
            onHide={() => setShow(false)}
            backdrop =" static "
            keyboard ={ false }
        >
            < Modal.Header closeButton >
                < Modal.Title > {title}</ Modal.Title >
            </ Modal.Header >
            < Modal.Body >
                <Form>
                    <Form.Group className ="mb-3">
                        <Form.Label>Имя БпЛА</Form.Label>
                        <Form.Control
                            placeholder="Имя БпЛА"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className ="mb-3">
                        <Form.Label>Изображение БпЛА</Form.Label>
                        <Form.Control
                            placeholder="Имя БпЛА"
                            type="file"
                            onChange={e =>  {
                                setCaptureFile(e.target.files[0])
                            }
                            }
                        />
                    </Form.Group>
                </Form>
                <Form.Label>Страна происхождения</Form.Label>
                <DropdownButton
                    className="mb-3"
                    title={item}
                    onSelect={e => setItem(e)}
                >
                {
                    countries.map(el => 
                        <Dropdown.Item
                            key={el}
                            eventKey={el}
                        >
                            {el}
                        </Dropdown.Item>
                        )
                }
                </DropdownButton>
                <Button variant="success" onClick={add}>Добавить</Button>
            </Modal.Body >
        </ Modal >
    )
}