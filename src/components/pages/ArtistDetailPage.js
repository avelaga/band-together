import React, { Component } from "react";
import BillieImg from "../../../dist/images/billie.jpg";
import PostImg from "../../../dist/images/post_malone.jpg"
import KissImg from "../../../dist/images/kiss.jpg"
import "./pages.css";

export class ArtistDetailPage extends Component {
  artists = [
    {
      name: "Post Malone",
      genre: "Pop/Hip hop",
      upcoming_shows: [],
      members: ["Post Malone"],
      year_started: 2013,
      bio:
        "Austin Richard Post (born July 4, 1995), known professionally as Post Malone, is an American rapper, singer, songwriter, and record producer. Known for his introspective songwriting and laconic vocal style, Post has gained acclaim for bending a range of genres including hip hop, pop, country, and rock. He first attained recognition in 2015 following the release of his debut single White Iverson. He subsequently signed a recording contract with Republic Records. Post has sold over 65 million records in the US alone. He received a Diamond certification by the Recording Industry Association of America (RIAA) for Congratulations. His accolades include three American Music Awards, a Billboard Music Award, and an MTV Video Music Award. Additionally, he has received six Grammy Award nominations during his career.",
      image: PostImg,
    },
    {
      name: "Billie Eilish",
      genre: "Alternative Rock",
      upcoming_shows: [],
      members: ["Billie Eilish"],
      year_started: 2015,
      bio:
        "Billie Eilish is an American singer and songwriter. She is best known for her successful debut single, \'Ocean Eyes.\' She was born and raised in Los Angeles, California. Belonging to a family of musicians, she was destined to make a career in performing arts. She joined a choir at the age of 8, and by the time she turned 11, she had begun writing and singing her own songs. Her elder brother, Finneas O\'Connell, was the biggest influence in her life while she was grew up. He had his own band and had written a song titled \'Ocean Eyes.\' Billie performed the song and released it online. It became a massive success. This turned out to be her first massive breakthrough. In 2017, her brother helped her record the single \'Bellyache.\' With the success of the song, Billie released her debut EP, \'Don\'t Smile at Me,\' in August 2017. The EP appeared on several American and international music charts. In October 2017, \'Apple\' named her their newest \'Up Next\' artist.",
      image: BillieImg,
    },
    {
      name: "Kiss",
      genre: "Rock",
      upcoming_shows: [],
      members: ["Paul Stanley", "Gene Simmons", "Eric Singer", "Tommy Thayer"],
      year_started: 1973,
      bio:
      "Kiss (often stylized as KIϟϟ) is an American rock band formed in New York City in January 1973 by Paul Stanley, Gene Simmons, Peter Criss, and Ace Frehley. Well known for its members\' face paint and stage outfits, the group rose to prominence in the mid-to-late 1970s with their elaborate live performances, which featured fire breathing, blood-spitting, smoking guitars, shooting rockets, levitating drum kits, and pyrotechnics. The band has gone through several lineup changes, with Stanley and Simmons being the only members to feature in every lineup. The original and best-known lineup consisted of Stanley (vocals and rhythm guitar), Simmons (vocals and bass), Frehley (lead guitar and vocals), and Criss (drums and vocals). With their make-up and costumes, they took on the personae of comic book-style characters: the Starchild (Stanley), the Demon (Simmons), the Spaceman or Space Ace (Frehley), and the Catman (Criss). Due to creative differences, both Criss and Frehley had departed the group by 1982.",
      image: KissImg,
    }     
  ];

  render() {
    const id = this.props.match.params.id;

    return (
      <div className="artist-detail-page">
        <div className="artist-detail">
          <div className="artist-detail-left">
            <img src={this.artists[id-1].image} className="artist-detail-image"/>
          </div>
          <div className="artist-detail-right">
            <h1>{this.artists[id - 1].name}</h1>
            <p>Genre: {this.artists[id - 1].genre}</p>
            <p>Started: {this.artists[id-1].year_started}</p>
          </div>
          <div className="clear" />
          <div className="artist-detail-bottom">
            <p>Bio:</p>
            <p>{this.artists[id - 1].bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistDetailPage;
