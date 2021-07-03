import React from 'react';

import s from './CustomCounter.module.css'


type CustomCounterPropsType = {
    value: number
    incButton: () => void
}

const CustomCounter: React.FC<CustomCounterPropsType> = (props) => {
    let presentValue = props.value

    const incButton = () => presentValue < 5 ? props.incButton() : ''

    return (
        <div className={s.outer_contour}>

            <div className={s.counter}>
                <div className={s.headDisplay}>
                    <h3>max value:</h3>
                    <div className={s.display}>{presentValue}</div>
                </div>
                <div className={s.headDisplay}>
                    <h3>start value:</h3>
                    <div className={s.display}>{presentValue}</div>
                </div>
            </div>

            <div className={s.buttons}>
                <button className={s.button} onClick={incButton} disabled={presentValue === 5}>set</button>
            </div>
        </div>
    );
}

export default CustomCounter;
