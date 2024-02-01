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
        setType(res.data.types);
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

                {name &&
                    <p>Your chosen Pokémon: <span className="capitalise">{name}</span></p>
                }
                {type && type.length > 0 &&
                    <p>Type:
                        {type.map((t) => {
                            return <span className={`capitalise pokemon-type-${t}`}>{t.type.name}</span>;
                        })}
                    </p>
                }
            </div>
        </>
    )
}

export default Pokemon;