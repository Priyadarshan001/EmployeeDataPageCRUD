import React, { Component } from "react";
import "./index.css";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button
} from "@mui/material";

export class MUITable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hrData: [
        {
          id: 1,
          Name: "Abc",
          age: 12,
          email: "abc@abc.com",
        },
        {
          id: 2,
          Name: "Xyz",
          age: 12,
          email: "xyz@xyz.com",
        },
        {
          id: 3,
          Name: "Pqr",
          age: 12,
          email: "pqr@pqr.com",
        },
      ],
    };
  }

  render() {
    return (
    
       <TableContainer className="table">
        <Table>
          <TableHead>
            <TableRow className="tablerow">
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Button</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.hrData.map((row) => (
              <TableRow key={row?.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.Name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell><Button variant="contained" color="success" size="small">Details</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            )
            
  }
}

export default MUITable;
