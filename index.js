import { Button, ButtonGroup } from "@mui/material";
import React, { Component } from "react";
import "./index.css";
import Details from "./rightpanel";
import { MUITable } from "./table";

class EmployeeData extends Component {
  constructor(props) {
    super(props);
    this.state={
     show:false,
    }
  }
  setVisibility = () => {
    this.setState({show:true})
  }
 
  render() {
    return (
      <div className="main">
        <h2 className="h2">EMPLOYEE DATA</h2>

        <div className="div1">
          <h3 className="h3">Department</h3>
          <ButtonGroup
            className="button"
            size="large"
            aria-label="small button group"
            orientation="vertical"
            variant="contained"
          >
            <Button className="btn" key="one">IT</Button>
            <Button className="btn" key="two" onClick={this.setVisibility}>HR</Button>
            <Button className="btn" key="three">Accounts</Button>
          </ButtonGroup>
        </div>
        <div className="div2">
          {this.state.show &&
          <MUITable />}
          <Details/>
        </div>
      </div>
    );
  }
}

export default EmployeeData;
