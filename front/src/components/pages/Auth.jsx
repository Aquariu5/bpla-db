import { useState, useCallback } from "react";
import {Container, Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import useInput from "../hooks/useInput";
import cl from '../../styles/Auth.module.css';
import { checkUser } from '../utils/checkUser'
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
const Auth = () => {
    const [name, onChangeName] = useInput('');
    const [pass, onChangePass] = useInput('');
    const [wrong, setWrong] = useState(cl.WrongNone);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.authReducer.auth);
    const history = useHistory();
    const enter = useCallback(() => {
        if (checkUser(name, pass)) {
            dispatch({type: "SET_AUTH", payload: !auth});
            localStorage.setItem('auth', 'true');
            history.push('/base');
        }
        else {
            setWrong(cl.Wrong);
            setTimeout(_ => setWrong(cl.WrongNone), 2000);
        }
    },[name,pass]);

    return (
        <div className={cl.Auth}>
            <Form>
                <Form.Group className ="mb-3">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control
                        placeholder="Логин"
                        value={name}
                        onChange={onChangeName}
                    />
                </Form.Group>
                <Form.Group className ="mb-3">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        placeholder="Пароль"
                        value={pass}
                        onChange={onChangePass}
                    />
                </Form.Group>
            </Form>
            <Button color="primary" size="large" variant="contained" onClick={enter}>Войти</Button>

            <div className={wrong}>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Попробуйте еще раз — <strong>неверный логин или пароль</strong>
                </Alert>
            </div>
            {/* <div className={wrong}>Попробуйте еще раз</div> */}
        </div>
        
    )
}

export default Auth