import React from "react";

export function ErrorMessage({message})
{
    return (
        <h3 style={{color:"red"}}>{message}</h3>
    )
}