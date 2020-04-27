import React, { Component, useState } from "react";
import "./pages.css"
import numArtistsPerGenre from '../extras/genreData.json';
import numConcertsPerState from '../extras/stateData.json';
import avgTicketPrice from '../extras/ticketData.json';
import BarChart from '../extras/BarChart';
import Scatterplot from '../extras/ScatterChart';
import PieChart from '../extras/PieChart';

export class Visualizations extends Component{

    constructor(){
        super();
    }

    render (){
        return (
        <div className="body">
            <div className="Ticket-vis" style={whiteText}>
                <h1>Average Ticket Prices</h1>
                <br />
                <Scatterplot data={avgTicketPrice} xAttr="price" yAttr="priceCount" xMax={1000} yMax={250} xLabel="Average Ticket Price" yLabel="Number of Concerts" />
            </div>
            <br />
            <div className="Genre-vis" style={whiteText}>
                <h1>Artists per Genre</h1>
                <PieChart data={numArtistsPerGenre}/>
            </div>
            <br />
            <div className="Concerts-Vis">
                <h1 style={whiteTextUnalign}>Concerts per State</h1>
                <BarChart data={numConcertsPerState} xAttr="state" yAttr="numConcerts"/>
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