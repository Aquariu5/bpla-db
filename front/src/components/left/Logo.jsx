import cl from '../../styles/Left.module.css'
import { useState } from 'react';

const Logo = (props) => {
    let [state, setState] = useState('');
    //setState(prev => prev.change != props.change ? props.change : '')
    return <div className={cl.Logo}>
        Данное меню можно скрыть кнопкой выше
    </div>
}

export default Logo