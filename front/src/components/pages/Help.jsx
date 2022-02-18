import { useState } from "react";
import Header  from "../ui-components/Header";
import cl from '../../styles/About.module.css'
export const Help = () => {
    const [test, setTest] = useState('');

    let info = "Круглосуточная помощь для особо одаренных";
    let phone = "Телефоны для справок:";
    let number = "+7-917-742-61-63";
    let number2 = "+7-987-224-41-88";
    return (
        <div>
            <Header name="Помощь"/>
            <div className={cl.About}>
            <p>{info}</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <span style={{'color': 'red'}}>{phone}</span> 
                <ul style={{listStyleType: 'none', marginLeft: '-20px'}}>
                    <li>
                        {number}
                    </li>
                    <li>
                    {number2}
                    </li>
                </ul>
            </div>
            
            {/* <p></p>
            <p style={{paddingLeft: '9.5vw'}}></p> */}
            </div>
        </div>
    )
}