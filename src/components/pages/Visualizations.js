import React, { Component, useState } from "react";
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


export class Visualizations extends Component{

    constructor(){
        super();
    }

    render (){
        return (
        <div className="body">

            <h1 style={grayText}> Band Together Visualizations</h1>

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
            <div className="Concerts-Vis" style={whiteText}>
                <h1>Concerts per State</h1>
                <BarChart data={numConcertsPerState} xAttr="state" yAttr="numConcerts"/>
            </div>

            <h1 style={grayText}> Developer Visualizations</h1>

            <div className="Genre-vis" style={whiteText}>
                <h1>Number of Animals in each status</h1>
                <PieChart data={animalStatus}/>
            </div>

            <div className="Endangered-Vis" style={whiteText}>
                <h1>Endangered Plants per State</h1>
                <BarChart data={numEndangeredPerState} xAttr="state" yAttr="Endangered"/>
            </div>
            <div className="EndangeredPlant-Vis" style={whiteText}>
                <h1>Status by Growth Type</h1>
                <div id="stackedBarChart"></div>
                <StackedBarChart />
            </div>
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


const grayText = {
    color: 'gray',
    width: '100vw',
    margin: 'auto',
    justifyContent: 'center',
    textAlign: 'center'
}

export default Visualizations;