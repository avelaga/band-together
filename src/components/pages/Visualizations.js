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
        <div className='body'>
            <h1>Average Ticket Price Visualization</h1>
            <br />
            <Scatterplot data={avgTicketPrice} xAttr="price" yAttr="priceCount" xMax={2500} yMax={200} xLabel="Price" yLabel="Number of Concerts" />
            <br />
            <h1>Artist Genre Count</h1>
            <PieChart data={numArtistsPerGenre}/>
            <br />
            <h1>Concerts per State</h1>
            <BarChart data={numConcertsPerState} xAttr="state" yAttr="numConcerts"/>

        </div>
    );
    }

}

export default Visualizations;