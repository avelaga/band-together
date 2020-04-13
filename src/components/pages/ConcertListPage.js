import React, { Component, Children } from "react";
import ConcertCard from '../layout/ConcertCard.js';
import { Pagination } from "semantic-ui-react";
import MediaQuery from 'react-responsive'
const axios = require("axios").default;

export class ConcertListPage extends Component {
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
    let url = "https://bandtogetherapi.xyz/restapi/concert";
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
    let url = "https://bandtogetherapi.xyz/restapi/concert";
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
        <h1 className="title">Concerts</h1>
        {!this.state.results && <div className="lds-ripple"><div></div><div></div></div>}
        {this.state.results &&
          <div>
            <div className="flex">
              {this.state.results.map((value, index) => {
                return <ConcertCard key={index} name={value.artistName} img={value.venueImage ? value.venueImage : value.artistImage} city={value.locationName} date={value.date} time={value.time} ticket_min={value.ticket_min} ticket_max={value.ticket_max} location_url={"locations/" + value.id} artist_url={"artists/" + value.artistId} concert_url={"concerts/" + value.id} />
              })}
            </div>
            <div className="pagination-menu">
              {/* desktop */}
              <MediaQuery minDeviceWidth={500}>
                <Pagination
                  activePage={this.state.page}
                  totalPages={Math.ceil(this.state.count / 10)}
                  siblingRange={1}
                  onPageChange={this.setPageNum}
                  
                />
              </MediaQuery>

              {/* mobile */}
              <MediaQuery maxDeviceWidth={500}>
                <Pagination
                  activePage={this.state.page}
                  totalPages={Math.ceil(this.state.count / 10)}
                  siblingRange={1}
                  onPageChange={this.setPageNum}
                  ellipsisItem={null}
                  boundaryRange={0}
                />
              </MediaQuery>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default ConcertListPage;