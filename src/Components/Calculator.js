import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => 
{
    const [display, setDisplay] = useState("");

    const prepareCalculation = (e) => {
        setDisplay(display.concat(e.target.value));
    };

    const clearDisplay = () => 
    {
        setDisplay("");
    };

    const runCalculation = () =>
    {
        // Adhering to the course for this. In the real world eval() would not be used here.
        // eslint-disable-next-line
        setDisplay(eval(display)); 
    };

    return <>
        <div className="main-calculator">
            <input type="text" placeholder="0" id="answer" readOnly value={display}/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="9"/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="8"/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="7"/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="6"/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="5"/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="4"/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="3"/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="2"/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="1"/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="0"/>

            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="+"/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="-"/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="*"/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="/"/>
            <input type="button" className="main-calculator-button" onClick={prepareCalculation} value="%"/>

            <input type="button" className="main-calculator-button main-calculator-control" onClick={clearDisplay} value="Clear"/>
            <input type="button" className="main-calculator-button main-calculator-control" onClick={runCalculation} value="="/>
        </div>
    </>;
}

export default Calculator;