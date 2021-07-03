import React, {ChangeEvent} from 'react';

import s from './CustomCounter.module.css'


type CustomCounterPropsType = {
    value: number
    maxValue: (value: string) => void
    StartValue: (value: string) => void
}

const CustomCounter: React.FC<CustomCounterPropsType> = (props) => {


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValue(e.currentTarget.value)
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.StartValue(e.currentTarget.value)
    }
    const setButton = () => {

    }
    return (
        <div className={s.outer_contour}>

            <div className={s.counter}>
                <div className={s.headDisplay}>
                    <h3>max value:</h3>
                    <input className={s.display} type={"number"} min={0} max={24} onChange={onChangeMaxValueHandler}/>
                </div>
                <div className={s.headDisplay}>
                    <h3>start value:</h3>
                    <input className={s.display} value={0} type={"number"} min={0} max={24}
                           onChange={onChangeStartHandler}/>
                </div>
            </div>

            <div className={s.buttons}>
                <button className={s.button} onClick={setButton} disabled={props.value === 5}>set</button>
            </div>
        </div>
    );
}

export default CustomCounter;
