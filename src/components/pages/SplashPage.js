import React, { Component } from "react";
import SearchField from "react-search-field";
import Navbar from '../layout/Navbar';
import { Redirect } from "react-router-dom";
import "./pages.css";

export class SplashPage extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: null
    }
  }

  newSearch(searchTerm) {
    console.log(searchTerm);
    this.setState({
      searchTerm: searchTerm
    });
  }

  render() {
    if (this.state.searchTerm) {
      return <Redirect to={{
        pathname: '/search',
        state: { searchTerm: this.state.searchTerm }
      }} />

    }
    return (
      <div>
      <Navbar />
      <div className="splash-back body">
        <div style={row} >
          <div style={splashText}></div>
          <div style={splashText}></div>
          <div className="splash-text">
            <h1 className="appear-second">Band Together</h1>
            <p className="appear-fourth">Find the music you love</p>
            <div className="appear-sixth">
              <SearchField
                placeholder="Search for an artist, genre, city, etc..."
                onEnter={(e) => { this.newSearch(e) }}
                onSearchClick={(e) => { this.newSearch(e) }}
              />
            </div>
          </div>
          <div style={splashText}></div>
        </div>
      </div>
      </div>
    );
  }
}

const splashText = {
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '100%',
  flex: '4',
  textAlign: 'right'
}

const row = {
  paddingTop: '40vh',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
}

export default SplashPage;
