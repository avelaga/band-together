import React, { Component } from "react";
import ConcertDetailsCard from "../layout/ConcertDetailsCard.js"
import Navbar from '../layout/Navbar';
import { Redirect } from 'react-router-dom';
import "./pages.css";

const axios = require("axios").default;
export class ConcertDetailPage extends Component {
  constructor() {
    super();
    this.state = {
      count: null
    }
  }

  componentDidMount() {
    let url = "https://bandtogetherapi.xyz/restapi/concert";
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
      <div>
        <Navbar />
        <div className="body flex">
          <div className="appear-second">
            <ConcertDetailsCard id={this.props.match.params.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default ConcertDetailPage;


