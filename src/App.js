import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Counter from './Components/Counter';
import {Routes, Route} from 'react-router-dom';

function App(){
    const [state, updateState] = useState();

    const init = () => {

    }
    return (
        <>
        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path = "/about" element={<About/>}/>
        </Routes>
        {<div className='main'>
            <Header/>
            <Counter/>
        </div>}
        </>
    );
}

export default App;