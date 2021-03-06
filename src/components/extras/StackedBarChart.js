import React, {Component} from 'react';
import '../../App.css';
import * as d3 from 'd3';

class StackedBarChart extends Component {
    constructor(props){
        super(props);
        this.createStackedBarChart = this.createStackedBarChart.bind(this);
    }

    componentDidMount(){
        this.createStackedBarChart();
    }

    componentDidUpdate(){
        this.createStackedBarChart();
    }

    createStackedBarChart(){

        // set the dimensions and margins of the graph
        const margin = {top: 10, right: 30, bottom: 20, left: 50};
        const width = 460 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3
            .select("#stackedBarChart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
        //List of subgroups = header of the csv files = soil condition here
        var subgroups = ["Endangered", "Threatened", "Recovery"]

        // List of groups = species here = value of the first column called group -> I show them on the X axis
        var growth_data = 
        [
            {"group" : "Forb/Herb", "Endangered": 198, "Threatened" : 97, "Recovery": 8},
            {"group" : "Subshrub", "Endangered": 37, "Threatened" : 9, "Recovery": 2},
            {"group" : "Shrub", "Endangered": 31, "Threatened" : 19, "Recovery": 1},
            {"group" : "Graminoid", "Endangered": 15, "Threatened" : 5, "Recovery": 0},
            {"group" : "Vine", "Endangered": 4, "Threatened" : 2, "Recovery": 0},
            {"group" : "Tree", "Endangered": 5, "Threatened" : 1, "Recovery": 0}
        ]

        var groups = d3.map(growth_data, function(d){return(d.group)}).keys()
                


        // Add X axis
        var x = d3.scaleBand()
            .domain(groups)
            .range([0, width])
            .padding([0.2])
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickSizeOuter(0));

        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, 400])
            .range([ height, 0 ]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // color palette = one color per subgroup
        var color = d3.scaleOrdinal()
            .domain(subgroups)
            .range(['#e41a1c','#377eb8','#4daf4a'])

        //stack the data? --> stack per subgroup
        var stackedData = d3.stack()
            .keys(subgroups)
             (growth_data)

        // // Show the bars
        svg.append("g")
            .selectAll("g")
            // Enter in the stack data = loop key per key = group per group
            .data(stackedData)
            .enter().append("g")
            .attr("fill", function(d) { return color(d.key); })
            .selectAll("rect")
            // enter a second time = loop subgroup per subgroup to add all rectangles
            .data(function(d) { return d; })
            .enter().append("rect")
                .attr("x", function(d) { return x(d.data.group); })
                .attr("y", function(d) { return y(d[1]); })
                .attr("height", function(d) { return y(d[0]) - y(d[1]); })
                .attr("width",x.bandwidth())
            

    }

    render(){
        return <div ref="stackedBarChart"></div>;
    }

}
export default StackedBarChart;