import React, { Component } from "react";
import ArtistDetailsCard from "../layout/ArtistDetailsCard.js";
import {Redirect} from 'react-router-dom';
import "./pages.css";

const axios = require("axios").default;
export class ArtistDetailPage extends Component {

  constructor() {
    super();
    this.state = {
      count: null
    }
  }

  componentDidMount() {
    let url = "http://192.168.1.170:8000/restapi/artist";
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
    console.log(this.state.count);
    if(this.state.count){
      if(isNaN(id ||  id > this.state.count)){
        return <Redirect to="/error"/>
      }
    }
    return (
      <div className="body flex">
        <ArtistDetailsCard id={this.props.match.params.id} />
      </div>
    );
  }
}

export default ArtistDetailPage;

