import cl from '../../styles/Left.module.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const LogOut = (props) => {
    let [state, setState] = useState('');

    //setState(prev => prev.change != props.change ? props.change : '')
    const dispatch = useDispatch();
    const history = useHistory();
    const auth = useSelector(state => state.authReducer.auth);
    const show = useSelector(state => state.displayReducer.display);
    console.log('auth', auth);
    const logOut = () => {
        dispatch({type: "SET_AUTH", payload: false});
        dispatch({type: "SET_DISPLAY", payload: false});
        //localStorage.setItem('auth', 'false');
        localStorage.removeItem('auth');
        history.push('/auth');
    }
    return (
        <div style={{textAlign: 'center'}}>
            {/* <AuthButton name="Выйти" style={{width: 'auto'}} onClick={logOut}/> */}
            <Button onClick={logOut}>Выйти</Button>
        </div>
    )
}

export default LogOut