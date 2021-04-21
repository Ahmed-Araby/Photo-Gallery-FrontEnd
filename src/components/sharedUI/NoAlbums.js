import React from "react";

export function NoAlbums({user})
{
    return (
        <h1 style={{color:"red"}} >
            {user.name}, You have no Albums, go a head and create one
        </h1>
    )
}