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
import {UploadImage} from "../forms/UploadImage";
export function Album(props)
{
    const location = useLocation();

    return (
        <>
            <UploadImage/>
        </>
    )
}