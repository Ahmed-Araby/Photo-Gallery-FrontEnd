
/**
 *  this component will hold reference information to the image 
 *  image id, 
 *  album id,
 *  user, 
 */
import React, {useState, useEffect, useContext} from "react";
import Button from '@material-ui/core/Button';

const styles ={
    image:{
        width:"300px", 
        height:"300px", 
    }, 
    imageCard:{
        padding:"2px", 
        float:"left",
        margin:"5px",
        border:"5px solid black" 

    }, 
    button:{
        margin:"3px"
    }

}
const fakeSrc = "https://www.travelanddestinations.com/wp-content/uploads/2020/11/Beautiful-Places-in-Norway.jpg";

export function ImageCard({imgSrc})
{
    return (
        <div style={styles.imageCard}>


            <img style={styles.image}
                    src={imgSrc || fakeSrc}/>
            <br></br>
            <Button style={styles.button}
                    variant="contained"
                    color="primary"
                    href="#contained-buttons"
                >
                Open
            </Button>

            <Button style={styles.button}
                    variant="contained"
                    color="primary">
                DownLoad
            </Button>

            <Button style={styles.button}
                    variant="contained"
            >
            Edit</Button>

            <Button style={styles.button}
                    variant="contained"
                    color="secondary">
                Delete
            </Button>

        </div>
    )
}