import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Counter from './Components/Counter';
import {Routes, Route} from 'react-router-dom';

function App(){
    return (
        <>
        <Header/>
        <Routes>
                <Route path="/" element={
                    <>
                        <Home/>
                    </>
                }/>
                <Route path = "/counter" element={<Counter/>}/>
                <Route path = "/about" element={<About/>}/>
        </Routes>
        </>
    );
}

export default App;