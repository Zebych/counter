import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Сounter";
import CustomCounter from "./CustomCounter/CustomСounter";


function App() {
    let [value, setValue] = useState(0)

    const incButton = () => {
        setValue(++value)
    }
    const resetButton = () => {
        setValue(0)
    }
    const startValue = (start: string) => {

    }
    const maxValue = (max: string) => {

    }
    return (<div className={'position'}>
            <CustomCounter value={value} maxValue={maxValue} StartValue={startValue}/>
            <Counter value={value} incButton={incButton} resetButton={resetButton}/>
        </div>
    )
}

export default App;
