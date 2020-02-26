import React, { Component, Children } from "react";
import Table from '@material-ui/core/Table';

export class ConcertListPage extends Component {
  renderTableRow(name, img, desc, location){
    return (<tr>
              <th>{name}</th>
              <th>{desc}</th>
              <th>{location}</th>
            </tr>);
  }

  render(){
    //test = (this.renderTableRow)
    
    return(  
      <div className="ConcertList">
        <h1>Concert List</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th><h3>Concert</h3></th>
              <th><h3>Description</h3></th>
              <th><h3>Location</h3></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableRow("test", null, "desc", "location")}
            {this.renderTableRow("test2", null, "desc2", "location")}
            {this.renderTableRow("test3", null, "desc3", "location")}
          </tbody>
        </Table>
      </div>
    );
  }
}

// class Concert extends Component {
  
//   }
// }

export default ConcertListPage;
