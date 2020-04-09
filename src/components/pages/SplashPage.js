import React, { Component } from "react";
import SearchField from "react-search-field";
import "./pages.css";

export class SplashPage extends Component {
  newSearch(value){
    console.log(value);
  }

  render() {
    return (
      <div style={splashPage} className="splash-back">
        <div style={row}>
          <div style={splashText}></div>
          <div style={splashText}></div>
          <div style={splashText}>
            <div style={textPadding}>
              <h1>Band Together</h1>
              <p>Find the music you love</p>
            </div>
            <SearchField
              placeholder="Search..."
              onEnter={this.newSearch}
              onSearchClick={this.newSearch}
            />
          </div>
          <div style={splashText}></div>
        </div>
      </div>
    );
  }
}

const textPadding = {
  paddingBottom: '20px'
}

const splashPage = {
  backgroundColor: 'black',
  backgroundSize: '100%',
  height: '94vh',
  textAlign: 'center'
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
  width: '100%'
}

export default SplashPage;
