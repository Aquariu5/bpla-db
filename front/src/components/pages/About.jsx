import { useState } from "react";
import Header  from "../ui-components/Header";
import { about } from "../utils/someText";
import cl from '../../styles/About.module.css'
export const About = () => {
    const [test, setTest] = useState('');
    let name = <span style={{color: 'aqua'}}>Aquarius</span>;
    let place = <span style={{color: 'red'}}>ВИТ "ЭРА"</span>;
    return (
        <div>
            <Header name="Об авторе"/>
            <div className={cl.About}> 
                <p>{about(name, place)}</p>
                    <h3>Проекты:</h3>
                    <li>Бот в телеграме</li>
                    <li>Торговый робот для работы с криптовалютной биржей</li>
                    <hr/>
                    <h3>Планы:</h3>
                    <li>Научиться играть как можно больше песен</li>
                    <li>Научиться по максимуму играть в настольный теннис</li>
                    <li>Увеличить мышечную массу до 75 кг</li>
                    <li>Стабильно подтягиваться 25 раз</li>
                    <li>Знать в совершенстве React</li>
            </div>

        </div>
    )
}