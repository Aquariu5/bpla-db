import { useState } from "react";
import Header from "../ui-components/Header";
import cl from '../../styles/About.module.css'
export const Contacts = () => {
    const [test, setTest] = useState('');

    let info = "Если ты здесь, значит ты не смог разобраться в простых вещах. Тебе следует отсюда убраться";
    let phone = "Телефон для справок:";
    let number = "+7-917-742-61-63";

    return (
        <div>
            <Header name="Контакты"/>
            <div className={cl.About}>
            <p><span style={{'color': 'red'}}>{phone}</span> {number}</p>
            </div>
        </div>
    )
}