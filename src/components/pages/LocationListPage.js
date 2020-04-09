import React, { Component } from "react";
import LocationCard from '../layout/LocationCard.js';
import { Pagination } from "semantic-ui-react";
const axios = require("axios").default;
import "./pages.css";

const concerts = "/concerts"
const artists = "/artists"

export class LocationListPage extends Component {
  constructor() {
    super();
    this.state = {
      count: null,
      next: null,
      prev: null,
      results: null,
      page: 1
    }
  }

  componentDidMount() {
    let url = "http://192.168.1.170:8000/restapi/location";
    axios
      .get(
        url
      )
      .then(res => {
        this.setState({
          count: res.data.count,
          next: res.data.next,
          prev: res.data.previous,
          results: res.data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  setPageNum = (event, { activePage }) => {
    this.setState({ page: activePage });
    let url = "http://192.168.1.170:8000/restapi/location";
    axios
      .get(
        url + "?page=" + activePage
      )
      .then(res => {
        this.setState({
          count: res.data.count,
          next: res.data.next,
          prev: res.data.previous,
          results: res.data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="body">
        {!this.state.results && <div className="lds-ripple"><div></div><div></div></div>}
        {this.state.results &&
          <div>
            <div className="flex">
              {this.state.results.map((value, index) => {
                return <LocationCard key={index} city={value.city} country={value.country} timezone={value.timezone} region={value.region} area_code={value.area_code} img={value.image} city_url={"/locations/" + value.id} pop={value.population} elevation={value.elevation} />
              })}
            </div>
            <div className="pagination-menu">
              <Pagination
                activePage={this.state.page}
                totalPages={Math.ceil(this.state.count / 10)}
                siblingRange={1}
                onPageChange={this.setPageNum}
              />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default LocationListPage