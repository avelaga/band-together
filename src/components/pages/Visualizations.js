import React, { Component, useState } from "react";
import "./pages.css"
import numArtistsPerGenre from '../extras/genreData.json';
import numConcertsPerState from '../extras/stateData.json';
import avgTicketPrice from '../extras/ticketData.json';
import BarChart from '../extras/BarChart';
import BubbleChart from '../extras/BubbleChart';
import StateChart from '../extras/StateChart';

export class Visualizations extends Component{

    constructor(){
        super();
    }

    render (){
        return (
        <div className='body'>
            <h1>Average Ticket Price Visualization</h1>
            <br />
            <BarChart data={avgTicketPrice} xAttr="price" yAttr="priceCount" />

        </div>
    );
    }

}

export default Visualizations;