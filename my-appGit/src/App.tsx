import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Сounter";


function App() {
    let [value, setValue] = useState(0)

    const incButton = () => {
        setValue(++value)
    }
    const resetButton = () => {
        setValue(0)
    }

    return (
        <Counter value={value} incButton={incButton} resetButton={resetButton}/>
    )
}

export default App;
