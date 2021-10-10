import React, {ChangeEvent} from 'react';
import s from './CustomCounter.module.css'

type CustomCounterPropsType = {
    startValue: () => void
    maxValue: (valueS: number) => void
    valueStart: number
    valueMax: number
    setValueStart: (parseValue: number) => void
}

const CustomCounter: React.FC<CustomCounterPropsType> = (props) => {
let valueStart=props.valueStart
let valueMax=props.valueMax
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let parseMaxValue = JSON.parse(e.currentTarget.value)
        props.maxValue(parseMaxValue)
    }

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let parseStartValue = JSON.parse(e.currentTarget.value)
        props.setValueStart(parseStartValue)
    }

    const setButton = () => {
        props.startValue()
    }

    return (
        <div className={s.outer_contour}>

            <div className={s.counter}>
                <div className={s.headDisplay}>
                    <h3>max value:</h3>
                    <input className={s.display} value={valueMax} type={"number"} min={0} max={24}
                           onChange={onChangeMaxValueHandler}/>
                </div>
                <div className={s.headDisplay}>
                    <h3>start value:</h3>
                    <input className={s.display} value={valueStart} type={"number"} min={0} max={24}
                           onChange={onChangeStartHandler}/>
                </div>
            </div>
            <div className={s.buttons}>
                <button className={s.button} onClick={setButton} disabled={valueStart >= valueMax}>set</button>
            </div>
        </div>
    );
}

export default CustomCounter;
