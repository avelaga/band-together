import React, { Component } from "react";
import LocationDetailsCard from "../layout/LocationDetailsCard.js";
import { Redirect } from 'react-router-dom';
import "./pages.css";

const axios = require("axios").default;
export class LocationDetailPage extends Component {
  constructor() {
    super();
    this.state = {
      count: null
    }
  }

  componentDidMount() {
    let url = "https://bandtogetherapi.xyz/restapi/location";
    axios
      .get(
        url
      )
      .then(res => {
        this.setState({
          count: res.data.count
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const id = this.props.match.params.id;
    if (this.state.count) {
      if (isNaN(id || id > this.state.count)) {
        return <Redirect to="/error" />
      }
    }

    return (
      <div className="body flex">
        <div className="appear-second">
          <LocationDetailsCard id={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

export default LocationDetailPage;
