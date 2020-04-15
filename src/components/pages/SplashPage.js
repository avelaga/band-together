import React, { Component } from "react";
import SearchField from "react-search-field";
import "./pages.css";

export class SplashPage extends Component {
  newSearch(value){
    console.log(value);
  }

  render() {
    return (
      <div className="splash-back body">
        <div style={row} >
          <div style={splashText}></div>
          <div style={splashText}></div>
          <div className="splash-text">
            <h1 className="appear-fourth">Band Together</h1>
            <p className="appear-sixth">Find the music you love</p>
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
