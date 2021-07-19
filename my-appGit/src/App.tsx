import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Сounter";
import CustomCounter from "./CustomCounter/CustomСounter";


function App() {
    let [value, setValue] = useState<number>(0)
    const [valueMax, setValueMax] = useState(24)
    const [valueStart, setValueStart] = useState(0)

    useEffect(()=>{
        localStorage.setItem('valueMax',JSON.stringify(valueMax))
    },[valueMax])
    useEffect(() => {
        let maxValue = localStorage.getItem('valueMax')
        if (maxValue) {
            setValueMax(JSON.parse(maxValue))
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('valueStart',JSON.stringify(valueStart))
    },[valueStart])
    useEffect(() => {
        let startValue = localStorage.getItem('valueStart')
        if (startValue) {
            setValueStart(JSON.parse(startValue))
        }
    }, [])

    const incButton = () => {
        setValue(++value)
    }
    const resetButton = () => {
        setValue(valueStart)
    }
    const startValue = (valueStart: number) => {
        setValue(valueStart)
    }
    const maxValue = (valueMax: number) => {
        setValueMax(valueMax)
    }

    return (<div className={'position'}>
            <CustomCounter startValue={startValue}
                           maxValue={maxValue}
                           valueStart={valueStart}
                           setValueStart={setValueStart}
                           setValue={setValue}
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
