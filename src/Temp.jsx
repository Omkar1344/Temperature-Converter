import React, { useEffect, useState } from 'react'
import './Temp.css';

function Temp() {

    const [from, setFrom] = useState(' ');
    const [to, setTo] = useState(' ');
    const [fromUnit, setFromUnit] = useState('celsius');
    const [toUnit, setToUnit] = useState('fahrenheit');


    useEffect(() => {
        if (from === ' ') {
            setTo(' ');
            return;
        }

        let convertedTemp;

        if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
            convertedTemp = (from * 9 / 5) + 32;
        }
        else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
            convertedTemp = (from - 32) * 5 / 9;
        }
        else if (fromUnit === "celsius" && toUnit === "kelvin") {
            convertedTemp = from + 273.15;
        }
        else if (fromUnit === "kelvin" && toUnit === "celsius") {
            convertedTemp = from - 273.15;
        }
        else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
            convertedTemp = ((from - 32) * 5 / 9) + 273.15;
        }
        else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
            convertedTemp = ((from - 273.15) * 9 / 5) + 32;
        }
        else {
            convertedTemp = from;
        }
        setTo(convertedTemp);
    }, [from, fromUnit, toUnit])

    const handlefromvalue = (e) => {
        setFrom(e.target.value);
    }

    const handlefromunit = (e) => {
        setFromUnit(e.target.value);
    }

    const handletounit = (e) => {
        setToUnit(e.target.value);
    }

    return (
        <div className='main-container'>
            <div className='from-container'>
                <label htmlFor="from">From</label>
                <input type="number" value={from} onChange={handlefromvalue} />
                <select value={fromUnit} onChange={handlefromunit}>
                    <option value='celsius'>Celsius</option>
                    <option value='fahrenheit'>Fahrenheit</option>
                    <option value='kelvin'>Kelvin</option>
                </select>
            </div>
            <div className='to-container'>
                <label htmlFor="to">To</label>
                <input type="text" value={to} readOnly/>
                <select value={toUnit} onChange={handletounit}>
                    <option value='celsius'>Celsius</option>
                    <option value='fahrenheit'>Fahrenheit</option>
                    <option value='kelvin'>Kelvin</option>
                </select>
            </div>
        </div>
    )
}

export default Temp;