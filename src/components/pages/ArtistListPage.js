import React, { Component } from "react";
import ArtistCard from '../layout/ArtistCard.js';
import { Pagination } from "semantic-ui-react";
import MediaQuery from 'react-responsive'
const axios = require("axios").default;

export class ArtistListPage extends Component {
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
    let url = "https://bandtogetherapi.xyz/restapi/artist";
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
    let url = "https://bandtogetherapi.xyz/restapi/artist";
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
        <div className="appear-second">
        <h1 className="title">Artists</h1>
        {!this.state.results && <div className="lds-ripple"><div></div><div></div></div>}
        {this.state.results &&
          <div>
            <div className="flex">
              {this.state.results.map((value, index) => {
                return <ArtistCard key={index} name={value.name} genre={value.genre} img={value.image} artist_url={"artists/" + value.id} spotify_url={value.spotify_url} twitter_url={value.twitter_url} wiki_url={value.wiki_url} website={value.website} />
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
      </div>
    );
  }
}

export default ArtistListPage;