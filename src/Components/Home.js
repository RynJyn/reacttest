import React from "react";
import User from "./User";
import Paragraph from "./Paragraph";
import { useNavigate } from "react-router-dom";

const h1Style = {
  background: "blue",
  color: "#fff"
};

const RANKS = {
  b: "Beginner",
  e: "Expert"
};

function Home()
{
    const navigate = useNavigate();

    const goToCounter= () => {
        navigate("/counter");
    };

    return <>
        <h1 style={h1Style}>{`I am currently a ${RANKS.b} at React, working towards becoming an ${RANKS.e}`}</h1>
        <User name="Tester" status="Unverified"/>
        <Paragraph/>
        <button onClick={goToCounter}>Go to Counter</button>
    </>
}

export default Home;