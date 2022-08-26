import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
}
    from '@mui/material';
import { green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './index.css'

class Details extends Component {
    constructor(props){
        super(props);
        this.state={
            open: false,
        }
    }
  render() {
    return (
      <div className='rightPanel'>
        <div>
            <h2 className='details'>Details</h2>
            <Avatar className='avatar' sx={{ bgcolor: green[500]}} variant="rounded">
                <AssignmentIcon />
            </Avatar>
        </div>
        <div className='detailsData'>
        <h4>ID:</h4>
        <h4>Name:</h4>
        <h4>Age:</h4>
        <h4>Email:</h4>
        </div>
        <div className='detailsButton'>
        <Button variant="contained" color="success" size="small" onClick={()=>this.setState({open:true})}>Edit</Button>
        <Button variant="contained" color="success" size="small">Cancel</Button>
        </div>
        
        <div>
        <Dialog open={this.state.open}
                onClose={()=>this.setState({open:false})}>
            <DialogTitle>Edit Employee Data</DialogTitle>
            <DialogContent>
                <DialogContentText>
                <h4>ID:</h4>
                <h4>Name:</h4>
                <h4>Age:</h4>
                <h4>Email:</h4>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                
                <Button variant="contained" color="success" size="small" onClick={()=>this.setState({open:false})}>Cancel</Button>
                <Button variant="contained" color="success" size="small" onClick={()=>this.setState({open:false})}>Save</Button>
               
            </DialogActions>
        </Dialog>
    </div>
        


        </div>
    )
  }
}

export default Details