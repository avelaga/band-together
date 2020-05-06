import React, { Component } from "react";
import "./pages.css"
import numArtistsPerGenre from '../extras/genreData.json';
import numConcertsPerState from '../extras/stateData.json';
import avgTicketPrice from '../extras/ticketData.json';

import numEndangeredPerState from '../extras/endangeredData.json';
import animalStatus from '../extras/animalData.json';

import BarChart from '../extras/BarChart';
import StackedBarChart from '../extras/StackedBarChart';
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
                <h1 style={heading}> Band Together Visualizations</h1>
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
                <h1 style={heading}> Developer Visualizations</h1>
                <div className="Genre-vis" style={whiteText}>
                    <h2>Number of Animals in each status</h2>
                    <PieChart data={animalStatus} />
                </div>
                <div className="Endangered-Vis" style={whiteText}>
                    <h2>Endangered Plants per State</h2>
                    <BarChart data={numEndangeredPerState} xAttr="state" yAttr="Endangered" />
                </div>
                <div className="EndangeredPlant-Vis" style={whiteText}>
                    <h2>Status by Growth Type</h2>
                    <div id="stackedBarChart"></div>
                    <StackedBarChart />
                </div>
                <div style={pad} />
            </div>
        );
    }
}

const whiteText = {
    color: 'white',
    width: '100vw',
    margin: 'auto',
    justifyContent: 'center',
    textAlign: 'center'
}


const heading = {
    color: 'white',
    width: '100vw',
    margin: 'auto',
    justifyContent: 'center',
    textAlign: 'center'
}

const pad = {
    paddingBottom: '30px'
}

export default Visualizations;
