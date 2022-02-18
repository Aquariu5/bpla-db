import { useState } from "react";
import Header from "../ui-components/Header";
import s1 from '../../sounds/1.mp3';
import s2 from '../../sounds/2.mp3';
import s3 from '../../sounds/3.mp3';
import s4 from '../../sounds/4.mp3';
export const Music = () => {
    const [test, setTest] = useState('');
    return (
        <div>
            <Header name="Музыка"/>
            <div>
                <audio
                
                src={s1}
                >
                </audio>
            </div>
        </div>
    )
}