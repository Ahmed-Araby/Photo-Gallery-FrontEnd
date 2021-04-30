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
    let images = [1, 2, 3, 4]
    const [images2, set_images] = useState([]);
    const {user, set_user} = useContext(userContext);
    const [pageNumber, set_pageNumber] = useState(0);
    const [imagesPerPage, set_imagesPerPage] = useState(5);
    const [pageCnt, set_pageCnt] = useState(0);
    const location = useLocation();
    
    return (
        <center>
            <h1>Album X </h1>
            <br></br>
            {
                images.map((img)=>{
                    return <ImageCard key={img}></ImageCard>
                })
            }
            
        </center>
    )
}