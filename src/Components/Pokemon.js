import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Pokemon.css";

const Pokemon = () =>
{
    const [num, setNum] = useState(0);
    const [name, setName] = useState();
    const [type, setType] = useState();

    const APIURL = "https://pokeapi.co/api/v2/";

    useEffect(() => {
        if(num)
        {
            const REQUESTURL = APIURL + "pokemon/" + num.toString();
            getData(REQUESTURL);
        }
    });

    async function getData(url)
    {
        const res = await axios.get(url);
        setName(res.data.name);
        setType(res.data.types[0].type.name);
        console.log(res);
    }

    return(
        <>
            <div id="main-pokemon">
                <select name="selectPokemon" id="main-select-pokemon" value={num} onChange={(e)=>{setNum(e.target.value);}}>
                    <option value="0" disabled selected>Select a Pokémon</option>
                    <option value="1">Bulbsaur</option>
                    <option value="4">Charmander</option>
                    <option value="7">Squirtle</option>
                </select>

                <p>Your chosen Pokémon: <span className="capitalise">{name}</span></p>
                <p>Type: <span className={`capitalise pokemon-type-${type ? type : "none"}`}>{type}</span></p>
            </div>
        </>
    )
}

export default Pokemon;