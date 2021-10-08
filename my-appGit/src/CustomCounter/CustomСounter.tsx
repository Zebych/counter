import React, {ChangeEvent, useEffect} from 'react';
import s from './CustomCounter.module.css'


type CustomCounterPropsType = {
    startValue:(valueStart:number)=>void
    maxValue:(valueMax:number)=>void
    valueStart:number
    valueMax:number
    setValueStart:(parseValue:number)=>void
    // setValue:(parseMaxValue:number)=>void
}

const CustomCounter: React.FC<CustomCounterPropsType> = (props) => {
    // useEffect(() => {
    //     localStorage.setItem('valueStart', JSON.stringify(props.valueStart))
    // }, [props.valueStart])

    const valueStart=props.valueStart

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValue (JSON.parse(e.currentTarget.value))
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let parseValue=JSON.parse(e.currentTarget.value)
        props.setValueStart (parseValue)
    }

    const setButton=()=>{
        props.startValue(valueStart)
    }
    return (
        <div className={s.outer_contour}>

            <div className={s.counter}>
                <div className={s.headDisplay}>
                    <h3>max value:</h3>
                    <input className={s.display} value={props.valueMax}  type={"number"} min={0} max={24}
                           onChange={onChangeMaxValueHandler}/>
                </div>
                <div className={s.headDisplay}>
                    <h3>start value:</h3>
                    <input className={s.display} value={valueStart}  type={"number"} min={0} max={24}
                           onChange={onChangeStartHandler}/>
                </div>
            </div>

            <div className={s.buttons}>
                <button className={s.button} onClick={setButton} >set</button>
            </div>
        </div>
    );
}

export default CustomCounter;
