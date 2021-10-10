import React from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
    value: number
    incButton: () => void
    resetButton: () => void
    valueMax: number
}

const Counter: React.FC<CounterPropsType> = (props) => {
    const valueMax = props.valueMax
    const presentValue = props.value

    const incButton = () => presentValue < valueMax ? props.incButton() : ''
    const resetButton = () => props.resetButton()

    return (
        <div className={s.outer_contour}>
            <div className={s.counter}>
                <div className={s.display}>{presentValue}</div>
            </div>
            <div className={s.buttons}>
                <button className={s.button} onClick={incButton} disabled={presentValue === valueMax}>inc</button>
                <button className={s.button} onClick={resetButton} disabled={presentValue === 0}>reset</button>
            </div>
        </div>
    );
}

export default Counter;
