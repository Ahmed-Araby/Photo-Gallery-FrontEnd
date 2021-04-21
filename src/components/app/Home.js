/**
 * this component will display:
 * - paginated albums for the user
 * - small form to create album
 */

import React, { useContext, useState, useEffect } from "react";
import {AddAlbumForm} from "../forms/AddAlbumForm";
import {AlbumCard} from "./AlbumCard";
import {NoAlbums} from "../sharedUI/NoAlbums";
import {getArray, build_bearer_token} from "../../utils/utils";
import {userContext} from "../providers/UserProvider";


const albums_endPoint = "http://localhost:3004/album/1/2";
const fakeAlbum = {
    name:"family Album", 
    description:"All my family Photos "
}

export function Home(props)
{
    const [albums, set_albums] = useState([]);
    const {user, set_user} = useContext(userContext);
    const [pageNumbber, set_pageNumber] = useState(0);
    const [albumsPerPage, set_albumsPerPage] = useState(24);

    useEffect(()=>{
        fetch(albums_endPoint, {
            method:"GET",
            headers:{
                "Authorization":build_bearer_token(user),
            }
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            set_albums(data.albums);
        })
        .catch((err)=> console.log("error in catching albums : ", err));
    }, [user, pageNumbber, albumsPerPage])
    
    return  (
        <center>
            <AddAlbumForm />
            <br></br>
            {albums.length > 0 && 
                albums.map((album)=>{
                return <AlbumCard album={fakeAlbum}/>
                })
            }

            {
                albums.lenght == 0 && 
                <NoAlbums user/>
            }
        </center>
    )
}