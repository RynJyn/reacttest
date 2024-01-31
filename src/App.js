import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Counter from './Components/Counter';

function App(){
    const [state, updateState] = useState();

    const init = () => {

    }
    return (
        <>
        <div className='main'>
            <Header/>
            <Counter/>
        </div>
        </>
    );
}

export default App;