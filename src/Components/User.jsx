import React from "react";

function User(props)
{
    return (
        <>
            <h1>Hello, {props.name}</h1>
            <p>Account Status: {props.status}</p>
        </>
    )
}

export default User;