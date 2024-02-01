import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Counter from './Components/Counter';
import Calculator from './Components/Calculator';
import {Routes, Route} from 'react-router-dom';
import Pokemon from './Components/Pokemon';

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
                <Route path = "/calculator" element={<Calculator/>}/>
                <Route path = "/pokemon" element={<Pokemon/>}/>
        </Routes>
        </>
    );
}

export default App;