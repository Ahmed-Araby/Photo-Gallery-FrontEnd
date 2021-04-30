/**
 * this component will display:
 * - paginated albums for the user
 * - small form to create album
 */

import React, { useContext, useState, useEffect } from "react";
import Pagination from '@material-ui/lab/Pagination';

import {AddAlbumForm} from "../forms/AddAlbumForm";
import {AlbumCard} from "./AlbumCard";

import {NoAlbums} from "../sharedUI/NoAlbums";


import {getArray, build_bearer_token} from "../../utils/utils";
import {userContext} from "../providers/UserProvider";

const albums_endPoint = "http://localhost:3004/album/";
const fakeAlbum = {
    name:"family Album", 
    description:"All my family Photos "
}

export function Home(props)
{
    const [albums, set_albums] = useState([]);
    const {user, set_user} = useContext(userContext);
    const [pageNumber, set_pageNumber] = useState(0);
    const [albumsPerPage, set_albumsPerPage] = useState(5);
    const [pageCnt, set_pageCnt] = useState(0);

    useEffect(()=>{
        set_pageCnt(2);
    }, [])
    useEffect(()=>{
        fetch(albums_endPoint + `${pageNumber}/${albumsPerPage}`, {
            method:"GET",
            headers:{
                "Authorization":build_bearer_token(user),
            }
        })
        .then((resp)=>{

            return resp.json()
        })
        .then((data)=>{
            console.log("albums length is : ", data.albums.length, pageNumber,albumsPerPage)
            set_albums(data.albums);
        })
        .catch((err)=> console.log("error in catching albums : ", err));

    }, [user, pageNumber, albumsPerPage])
    

    const add_album = (newAlbum)=>{
        set_albums((albums)=>{
            return [newAlbum , ...albums];
        })
    }
    console.log("user is : ", user);
    return  (
        <center>
            <AddAlbumForm 
                add_album={add_album}
            /> <br></br>
            
            <div className="centerDiv">
                <Pagination count={pageCnt}
                            defaultPage={pageNumber + 1}
                            onChange={(e, newPageNum)=>{
                            set_pageNumber(newPageNum -1);
                        }}
                />
             </div> <br></br> <br></br> <br></br>
            
            {albums.length > 0 && 
           
                albums.map((album, index)=>{
                return <AlbumCard key={album.id} album={album}/>
                })
            }

            {
                albums.length == 0 && 
                <NoAlbums user={user}/>
            }

        </center>
    )
}