/**
 * this component will provide navigation between 
 * the different application parts
 * - create album
 * - browse albums
 * - signout
 */
 import React, { useState, useContext } from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import TextField from '@material-ui/core/TextField';
 import Button from '@material-ui/core/Button';
 import {MySnackbar} from "../sharedUI/MySnackbar";
 import {userContext} from "../providers/UserProvider";
 import {build_bearer_token} from "../../utils/utils";

 const useStyles = makeStyles((theme) => ({
   root: {
     '& > *': {
       margin: theme.spacing(1),
       width: '25ch',
     },
   },
 }));
 


 export function AddAlbumForm({add_album})
 {
    const classes = useStyles();
    const [name, set_name] = useState("");
    const [desc, set_desc] = useState("");
    const {user, set_user} = useContext(userContext);
    const [createFailed, set_createFailed] = useState(false);
    const [createSuccess, set_createSuccess] = useState(false);
    const [createError, set_createError] = useState(false);

    const handleCreateAlbumClick = (e)=>{

      if(name=="" || desc==""){
        alert("invalid input data ");
        return ;
      }
      
      const url = process.env.REACT_APP_DOMAIN + "/album";
      
      let failed = false;

      fetch(url, 
          {
          method:"POST", 
          headers:{
            "Authorization":build_bearer_token(user),
            'content-type': 'application/json'
          }, 
          body:JSON.stringify({
            new_album_name:name, 
            description:desc
          })
        })
      .then((resp)=>{
        if(resp.status!=201){
          failed = true;
        }
        return resp.json();
      })
      .then((res)=>{
        if(failed)  // handle failure here to access the error
          return Promise.reject(res.error);
        set_createSuccess(true);
      })
      .catch((err)=>{
        console.log("error", err);
        set_createFailed(true);
        set_createError(err);
      })

      return;
   }

    return (
        <>
        {/** My Snack bars start */}
        <MySnackbar
          open={createSuccess}
          onClose={()=>{
            set_createSuccess(false);
            add_album({
              name, 
              description:desc
            });
          }}
          message={`album ${name} create successfully `}
          type="success"
          duration={3000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
        />

        <MySnackbar
          open={createFailed}
          onClose={()=>{
            set_createFailed(false);
            set_createError("");
          }}
          message={createError}
          type="error"
          duration={3000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
        />

        {/** My Snack bars end */}
        
        <form className={classes.root} 
                noValidate 
                autoComplete="off">
             <TextField id="album-name" 
                        label="Album Name"
                        variant="outlined"
                        value={name}
                        onChange={(e)=> set_name(e.target.value)}
            />

            <TextField id="description"
                        label="Description"
                        variant="outlined"
                        value={desc}
                        onChange={(e)=> set_desc(e.target.value)}
            />

             <Button variant="contained"
                     color="primary" 
                     onClick={(e)=>handleCreateAlbumClick(e)}
             >
             Create
            </Button>

        </form>
        </>
    )
 }