import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Сounter";
import CustomCounter from "./CustomCounter/CustomСounter";
import {useDispatch, useSelector} from "react-redux";
import {
    counterReducer,
    startValueC,
    incValue,
    resetValue, incValuesTC, startValueFromLocalStorageTC,
} from "./state/counterReducer";
import {AppRootStateType} from "./state/store";
import {maxValueC, setStartValueC, setStartValueTC} from "./state/CustomCounterReducer";


function App() {
    // let [value, setValue] = useState<number>(0)
    // const [valueMax, setValueMax] = useState(24)
    // const [valueStart, setValueStart] = useState(0)
    const dispatch = useDispatch()
    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const valueMax = useSelector<AppRootStateType, number>(state => state.customCounter.valueMax)
    const valueStart=useSelector<AppRootStateType,number>(state=>state.customCounter.valueStart)

const setValueStart=(parseValue:number)=>{
        dispatch(setStartValueTC(parseValue))
}
    const incButton = () => {
        dispatch(incValuesTC())
    }
    const resetButton = () => {
        dispatch(resetValue(valueStart))
        // setValue(valueStart)
    }
    const startValue = (valueStart:number) => {
        dispatch(startValueFromLocalStorageTC(valueStart))

        // setValue(valueStart)
    }
    const maxValue = (valueMax: number) => {
        dispatch(maxValueC(valueMax))
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
