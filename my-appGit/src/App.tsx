import React from 'react';
import './App.css';
import Counter from "./Counter/Сounter";
import CustomCounter from "./CustomCounter/CustomСounter";
import {useDispatch, useSelector} from "react-redux";
import {incValuesTC, startValueFromLocalStorageTC, resetValueTC,} from "./state/counterReducer";
import {AppRootStateType} from "./state/store";
import {maxValueTC, setStartValueTC} from "./state/CustomCounterReducer";


function App() {
    const dispatch = useDispatch()
    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const valueMax = useSelector<AppRootStateType, number>(state => state.customCounter.valueMax)
    const valueStart = useSelector<AppRootStateType, number>(state => state.customCounter.valueStart)

    const setValueStart = (parseValue: number) => {
        dispatch(setStartValueTC(parseValue))
    }

    const incButton = () => {
        dispatch(incValuesTC())
    }

    const resetButton = () => {
        dispatch(resetValueTC())
    }

    const startValue = () => {
        dispatch(startValueFromLocalStorageTC())

    }

    const maxValue = (valueS: number) => {
        dispatch(maxValueTC(valueS))
    }

    return (<div className={'position'}>
            <CustomCounter startValue={startValue}
                           maxValue={maxValue}
                           valueStart={valueStart}
                           setValueStart={setValueStart}
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
