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

    return (<div className={'position'}>
            <CustomCounter value={value} incButton={incButton}/>
            <Counter value={value} incButton={incButton} resetButton={resetButton}/>
        </div>
    )
}

export default App;
