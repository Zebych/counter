import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Сounter";
import CustomCounter from "./CustomCounter/CustomСounter";
import {useDispatch, useSelector} from "react-redux";
import {counterReducer, countValue, incValue, resetValue} from "./state/counterReducer";
import {AppRootStateType} from "./state/store";
import {setStartValueC} from "./state/CustomCounterReducer";


function App() {
    // let [value, setValue] = useState<number>(0)
    const [valueMax, setValueMax] = useState(24)
    // const [valueStart, setValueStart] = useState(0)
    const dispatch = useDispatch()
    const value=useSelector<AppRootStateType,number>(state=>state.count.value)
    const valueStart=useSelector<AppRootStateType,number>(state=>state.customCounter.valueStart)
    useEffect(() => {
        let maxValue = localStorage.getItem('valueMax')
        if (maxValue) {
            setValueMax(JSON.parse(maxValue))
        }
    }, [])
    useEffect(() => {
        let startValue = localStorage.getItem('valueStart')
        if (startValue) {
            dispatch(setStartValueC(JSON.parse(startValue)))
            // setValueStart(JSON.parse(startValue))
        }
    }, [])
    useEffect(() => {
        let startValue = localStorage.getItem('valueStart')
        if (startValue) {
            // setValue(JSON.parse(startValue))
            dispatch(countValue(JSON.parse(startValue)))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('valueMax', JSON.stringify(valueMax))
    }, [valueMax])


    useEffect(() => {
        localStorage.setItem('valueStart', JSON.stringify(valueStart))
    }, [valueStart])

const setValueStart=(parseValue:number)=>{
        dispatch(setStartValueC(parseValue))
}
    const incButton = () => {
        dispatch(incValue(value))
        // setValue(++value)
    }
    const resetButton = () => {
        dispatch(resetValue(valueStart))
        // setValue(valueStart)
    }
    const startValue = (valueStart: number) => {
        dispatch(countValue(valueStart))
        // setValue(valueStart)
    }
    const maxValue = (valueMax: number) => {
        setValueMax(valueMax)
    }

    return (<div className={'position'}>
            <CustomCounter startValue={startValue}
                           maxValue={maxValue}
                           valueStart={valueStart}
                           setValueStart={setValueStart}
                           // setValue={setValue}
                           valueMax={valueMax}
            />
            <Counter
                value={value}
                valueMax={valueMax}
                incButton={incButton}
                resetButton={resetButton}
            />
        </div>
    )
}

export default App;
