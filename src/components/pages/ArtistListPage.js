import React, { Component } from "react";
import ArtistCard from '../layout/ArtistCard.js';
import { Pagination } from "semantic-ui-react";
import SearchField from "react-search-field";
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

  newSearch(value) {
    console.log(value);
    let url = "http://192.168.1.170:8000/restapi/artist/search?query=" + value;
    // let options = {
    //   headers: {'query': value}
    // };
    axios
      .get(
        url
      )
      .then(res => {
        this.setState({
          count: res.data.count,
          next: res.data.next,
          prev: res.data.previous,
          results: res.data.results,
          page: 1
        });
        console.log(res.data.count);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    let url = "http://192.168.1.170:8000/restapi/artist";
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
    let url = "http://192.168.1.170:8000/restapi/artist";
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
            <div className="search-div">
              <SearchField
                placeholder="Search..."
                onEnter={(e)=>{this.newSearch(e)}}
                // onSearchClick={this.newSearch}
              />
            </div>
            <div className="flex">
              {this.state.results.map((value, index) => {
                return <ArtistCard key={index} name={value.name} genre={value.genre} img={value.image} artist_url={"artists/" + value.id} spotify_url={value.spotify_url} twitter_url={value.twitter_url} wiki_url={value.wiki_url} website={value.website} />
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

export default ArtistListPage;

// const searchDiv = {
//   // float: 'right',
//   padding: '15px',
//   width: '100vw',
//   // display: 'flex',
//   // flexWrap: 'wrap',
//   textAlign: 'right'
// }

// const right = {
//   display: 'flex',
//   flexWrap: 'wrap',
//   alignContent: 'right'
// }