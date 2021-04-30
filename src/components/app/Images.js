/**
 * this component will display paginated images of a specific 
 * album.
 * 
 * information needed for this component is:
 * user data for the jwt token that user info.
 * album id to retrive images
 * 
 * */


import React, {useState,
                useEffect,
                 useContext} from "react";
import {ImageCard} from "./ImageCard";
import {useLocation} from "react-router-dom";
import {userContext} from "../providers/UserProvider";

export function Images(props)
{
    const location = useLocation();
    console.log('here ', location.state);
    const [age, set_age] = useState(1);
    const handleClick=()=>{
        set_age((age)=>{
            return age+1;
        });
    }
    return (
        <>
        <h1> Images </h1>
        <button onClick={handleClick}>click</button>
        </>
    )
}