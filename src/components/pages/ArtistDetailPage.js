import React, { Component } from "react";
import ArtistDetailsCard from "../layout/ArtistDetailsCard.js";
import BillieImg from "../../../dist/images/billie_eilish.jpg";
import PostImg from "../../../dist/images/post_malone.jpg"
import KissImg from "../../../dist/images/kiss.jpg"
import "./pages.css";
const axios = require("axios").default;

export class ArtistDetailPage extends Component {
  // id = this.props.match.params.id;

  componentDidMount() {
    const request_headers = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    };

    // commit api
    axios
      .get(
        "http://192.168.1.170:8000/restapi/artist/1", request_headers
      )
      .then(res => {
          console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    }

  render() {
    

    return (
      <div className="body flex">
          {/* <ArtistDetailsCard name={this.artists[id - 1].name} img={this.artists[id-1].image} genre={this.artists[id - 1].genre} started={this.artists[id-1].year_started} bio={this.artists[id - 1].bio} /> */}
      ahsdlhasldhlashdlashd
      </div>
    );
  }
}

export default ArtistDetailPage;


// http://127.0.0.1:8000/restapi/artist/1

    // name = models.CharField(max_length=50, null=True)
    // popularity_score = models.IntegerField(null=True)
    // genre = models.CharField(max_length=50, null=True)
    // image = models.URLField(null=True)
    // spotify_url = models.URLField(null=True)
    // num_spotify_followers = models.IntegerField(null=True)
    // website = models.URLField(null=True)
    // twitter_url = models.URLField(null=True)
    // wiki_url = models.URLField(null=True)