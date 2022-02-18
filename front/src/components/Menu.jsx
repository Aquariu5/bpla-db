import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container} from 'react-bootstrap';
export const Menu = () => {
    const [test, setTest] = useState('');
    const history = useHistory();
    return (
        <Container >
            <Button onClick={() => history.push('/base')}>База данных</Button>
            <Button onClick={() => history.push('/help')}>Помощь</Button>
            <Button onClick={() => history.push('/music')}>Музыка</Button>
            <Button onClick={() => history.push('/about')}>Об авторе</Button>
            <Button onClick={() => history.push('/contacts')}>Контакты</Button>
        </Container>
    )
}