import React from "react";
import Snackbar from '@material-ui/core/Snackbar';

import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function MySnackbar({open, onClose, duration=3000, message, type, anchorOrigin})
{

    return (
        <>
            <Snackbar 
                open={open}
                autoHideDuration={duration}
                onClose={onClose}
                anchorOrigin={anchorOrigin}
            >

                <Alert onClose={onClose} severity={type}>
                    {message}
                </Alert>

            </Snackbar>
        </>
    )

}