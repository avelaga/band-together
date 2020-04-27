import React, { Component } from "react";
import "./pages.css"
import numArtistsPerGenre from '../extras/genreData.json';
import numConcertsPerState from '../extras/stateData.json';
import avgTicketPrice from '../extras/ticketData.json';
import BarChart from '../extras/BarChart';
import Scatterplot from '../extras/ScatterChart';
import PieChart from '../extras/PieChart';
import Navbar from '../layout/Navbar';

export class Visualizations extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="body">
                <Navbar name={"visualizations"} />
                <h1 style={whiteText}>Visualizations</h1>
                <div className="Ticket-vis" style={whiteText}>
                    <h2>Average Ticket Prices</h2>
                    <br />
                    <Scatterplot data={avgTicketPrice} xAttr="price" yAttr="priceCount" xMax={1000} yMax={250} xLabel="Average Ticket Price" yLabel="Number of Concerts" />
                </div>
                <br />
                <div className="Genre-vis" style={whiteText}>
                    <h2>Artists per Genre</h2>
                    <PieChart data={numArtistsPerGenre} />
                </div>
                <br />
                <div className="Concerts-Vis" style={whiteText}>
                    <h2>Concerts per State</h2>
                    <BarChart data={numConcertsPerState} xAttr="state" yAttr="numConcerts" />
                </div>
            </div>
        );
    }

}

const whiteText = {
    color: 'white',
    width: '80vw',
    margin: 'auto',
    justifyContent: 'center',
    textAlign: 'center'
  }

const whiteTextUnalign = {
    color: 'white',
    width: '80vw',
    margin: 'auto',
    justifyContent: 'center',
    textAlign: 'center'
}

export default Visualizations;
