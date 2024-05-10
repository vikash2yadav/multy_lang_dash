import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

const SnackBar = (props) => {
      
  return (
    <div>
      <Snackbar open={props.open} autoHideDuration={3000} onClose={props.handleClose}>
        <Alert
          severity={props.severity}
          variant={props.variant}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackBar