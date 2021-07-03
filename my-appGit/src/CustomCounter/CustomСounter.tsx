import React from 'react';

import s from './CustomCounter.module.css'


type CustomCounterPropsType = {
    value: number
    incButton: () => void
}

const CustomCounter: React.FC<CustomCounterPropsType> = (props) => {
    let presentValue = props.value

    const incButton = () =>{

    }

    return (
        <div className={s.outer_contour}>

            <div className={s.counter}>
                <div className={s.headDisplay}>
                    <h3>max value:</h3>
                    <input className={s.display}  type={"number"} min={0} max={24}/>
                </div>
                <div className={s.headDisplay}>
                    <h3>start value:</h3>
                    <input className={s.display}  type={"number"} min={0} max={24} value={props.value}/>
                    {/*<div className={s.display}>{presentValue}</div>*/}
                </div>
            </div>

            <div className={s.buttons}>
                <button className={s.button} onClick={incButton} disabled={presentValue === 5}>set</button>
            </div>
        </div>
    );
}

export default CustomCounter;
