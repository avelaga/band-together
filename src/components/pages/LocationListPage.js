import React, { Component } from "react";
import LocationCard from '../layout/LocationCard.js';
import Navbar from '../layout/Navbar';
import Pagination from '@material-ui/lab/Pagination';
import SearchField from "react-search-field";
import MediaQuery from 'react-responsive';
import Slider from '@material-ui/core/Slider';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
const axios = require("axios").default;
import "./pages.css";

export class LocationListPage extends Component {
  constructor() {
    super();
    this.state = {
      compareList: [],
      compareIdList: [],
      compareOpen: false,
      count: null,
      next: null,
      prev: null,
      results: null,
      page: 1,
      searchTerm: '',
      searched: false,
      query: '',
      sortBy: "city",
      ascending: 1,
      region: "",
      minElevation: 0,
      maxElevation: 1620,
      minPopulation: 0,
      maxPopulation: 84000000,
      timezone: "",
      default: {
        count: null,
        next: null,
        prev: null,
        results: null,
        page: 1,
        searchTerm: '',
        searched: false,
        query: '',
        sortBy: "city",
        ascending: 1,
        region: "",
        minElevation: 0,
        maxElevation: 1620,
        minPopulation: 0,
        maxPopulation: 84000000,
        timezone: "",
      }
    }
  }

  newSearch(value) {
    if (value === "") {
      this.setState({
        query: value,
        searched: false
      }, this.updateState);
    } else {
      this.setState({
        query: value,
        searched: true
      }, this.updateState);
    }
  }

  updateState() {
    let url = "http://192.168.1.170:8000/restapi/location";
    let options = {
      params: {
        page: this.state.page,
        query: this.state.query,
        sortBy: this.state.sortBy,
        ascending: this.state.ascending,
        region: this.state.region,
        minElevation: this.state.minElevation,
        maxElevation: this.state.maxElevation,
        minPopulation: this.state.minPopulation,
        maxPopulation: this.state.maxPopulation,
        timezone: this.state.timezone
      }
    };
    axios
      .get(
        url, options
      )
      .then(res => {
        this.setState({
          count: res.data.count,
          next: res.data.next,
          prev: res.data.previous,
          results: res.data.results,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.setState({ page: 1 }, this.updateState);
  }

  setPageNum = (event, page) => {
    this.setState({ page: page }, this.updateState);
  };

  sortCity = (event) => {
    this.setState({ sortBy: "city" }, this.updateState);
  }

  sortRegion = (event) => {
    this.setState({ sortBy: "region" }, this.updateState);
  }

  sortElevation = (event) => {
    this.setState({ sortBy: "elevation" }, this.updateState);
  }

  sortPopulation = (event) => {
    this.setState({ sortBy: "population" }, this.updateState);
  }

  sortTimezone = (event) => {
    this.setState({ sortBy: "timezone" }, this.updateState);
  }

  sortAscending = (event) => {
    this.setState({ ascending: 1 }, this.updateState);
  }

  sortDescending = (event) => {
    this.setState({ ascending: -1 }, this.updateState);
  }

  elevationSlidersChange = (event, newValue) => {
    this.setState({
      minElevation: newValue[0],
      maxElevation: newValue[1]
    });
  };

  populationSlidersChange = (event, newValue) => {
    this.setState({
      minPopulation: newValue[0],
      maxPopulation: newValue[1]
    });
  };

  onChangeCommitted = (event, newValue) => {
    this.updateState();
  };

  reset = (event) => {
    this.setState({
      compareList: [],
      compareIdList: [],
      compareOpen: false,
      count: null,
      next: null,
      prev: null,
      results: null,
      page: 1,
      searchTerm: '',
      searched: false,
      query: '',
      sortBy: "city",
      ascending: 1,
      region: "",
      minElevation: 0,
      maxElevation: 1620,
      minPopulation: 0,
      maxPopulation: 84000000,
      timezone: "",
    }, this.updateState);
  }

  callback = (arg) => {
    if (!this.state.compareIdList.includes(arg)) { // add
      this.state.results.map((value, index) => {
        if (value.id === arg) {
          this.setState({
            compareList: this.state.compareList.concat(this.state.results[index]),
            compareIdList: this.state.compareIdList.concat(arg)
          }, this.printCompare);
        }
      })
    }
    else { // remove
      let objIndex = 0;
      this.state.compareList.map((value, index) => {
        if (value.id === arg) {
          objIndex = index;
        }
      })
      let newObjArr = this.state.compareList;
      newObjArr.splice(objIndex, 1);

      const idIndex = this.state.compareIdList.indexOf(arg);
      let newIdArr = this.state.compareIdList;
      newIdArr.splice(idIndex, 1);

      this.setState({
        compareIdList: newIdArr,
        compareList: newObjArr
      }, this.printCompare);
    }
  }

  printCompare() {
    console.log(this.state.compareList);
    console.log(this.state.compareOpen);
  }

  showCompare = () => {
    console.log("gonna show compare");
    this.setState({
      compareOpen: !this.state.compareOpen
    })
  }

  render() {
    return (
      <div className="body">
        <Navbar name={"locations"} />
        <div className="appear-second">
          <h1 className="title">Locations</h1>
          {!this.state.results && <div className="lds-ripple"><div></div><div></div></div>}
          {(this.state.results && !this.state.compareOpen) &&
            <div>
              <div className="search-div flex">
                {(this.state.compareList.length >= 2) &&
                  <Button variant="primary" onClick={this.showCompare} className="margin-right mobile-margin">Compare</Button>
                }
                {(this.state.compareList.length < 2) &&
                  <Button variant="secondary" onClick={this.showCompare} disabled={true} className="margin-right mobile-margin">Compare</Button>
                }
                <DropdownButton id="dropdown-basic-button" title="Sort by" className="margin-right mobile-margin">
                  <Dropdown.Item style={this.state.sortBy === "city" ? activeDropdown : inactiveDropdown} onClick={this.sortCity}>City</Dropdown.Item>
                  <Dropdown.Item style={this.state.sortBy === "region" ? activeDropdown : inactiveDropdown} onClick={this.sortRegion}>State</Dropdown.Item>
                  <Dropdown.Item style={this.state.sortBy === "elevation" ? activeDropdown : inactiveDropdown} onClick={this.sortElevation}>Elevation</Dropdown.Item>
                  <Dropdown.Item style={this.state.sortBy === "population" ? activeDropdown : inactiveDropdown} onClick={this.sortPopulation}>Population</Dropdown.Item>
                  <Dropdown.Item style={this.state.sortBy === "timezone" ? activeDropdown : inactiveDropdown} onClick={this.sortTimezone}>Timezone</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Order by" className="margin-right mobile-margin">
                  <Dropdown.Item style={this.state.ascending === 1 ? activeDropdown : inactiveDropdown} onClick={this.sortAscending}>Ascending</Dropdown.Item>
                  <Dropdown.Item style={this.state.ascending === -1 ? activeDropdown : inactiveDropdown} onClick={this.sortDescending}>Descending</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Filter by" className="margin-right mobile-margin">
                  <Dropdown.Item >
                    <div className="slider-div">
                      <h6>Elevation</h6>
                      <Slider
                        value={[this.state.minElevation, this.state.maxElevation]}
                        onChange={this.elevationSlidersChange}
                        onChangeCommitted={this.onChangeCommitted}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        style={sliderStyle}
                        min={0}
                        max={1620}
                      />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div className="slider-div">
                      <h6>Population</h6>
                      <Slider
                        value={[this.state.minPopulation, this.state.maxPopulation]}
                        onChange={this.populationSlidersChange}
                        onChangeCommitted={this.onChangeCommitted}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        style={sliderStyle}
                        min={0}
                        max={560000}
                      />
                    </div>
                  </Dropdown.Item>
                </DropdownButton>
                <div className="margin-right mobile-margin">
                  <SearchField
                    placeholder="Search..."
                    onEnter={(e) => { this.newSearch(e) }}
                    onSearchClick={(e) => { this.newSearch(e) }}
                  />
                </div>
                <Button variant="secondary" onClick={this.reset}>Reset</Button>
              </div>
              {/* If count = 0, show no results page */}
              {(this.state.count === 0) &&
                <div className="flex white">
                  <h1>No results found</h1>
                </div>
              }
              {/* If count > 0, show results + pagination menu */}
              {(this.state.count > 0) &&
                <div>
                  <div className="flex">
                    {this.state.results.map((value, index) => {
                      return <LocationCard key={index} compare={this.callback} compareSelected={this.state.compareIdList.includes(value.id)} id={value.id} city={value.city} country={value.country} timezone={value.timezone} region={value.region} area_code={value.area_code} img={value.image} city_url={"/locations/" + value.id} pop={value.population} elevation={value.elevation} searched={this.state.searched} query={this.state.query} />
                    })}
                  </div>
                  <div className="pagination-menu">
                    {/* desktop */}
                    <MediaQuery minDeviceWidth={500}>
                      <Pagination
                        color="primary"
                        size="large"
                        page={this.state.page}
                        count={Math.ceil(this.state.count / 10)}
                        onChange={this.setPageNum}
                      />
                    </MediaQuery>
                    {/* mobile */}
                    <MediaQuery maxDeviceWidth={500}>
                      <Pagination
                        color="primary"
                        size="size"
                        page={this.state.page}
                        count={Math.ceil(this.state.count / 10)}
                        onChange={this.setPageNum}
                        siblingCount={0}
                      />
                    </MediaQuery>
                  </div>
                </div>
              }
            </div>
          }

          {/* show compare options  */}
          {(this.state.results && this.state.compareOpen) &&
            <div>
              <div className="search-div flex">
                <Button variant="secondary" onClick={this.showCompare} className="margin-right mobile-margin">Close</Button>
              </div>
              <div className="flex">
                {this.state.compareList.map((value, index) => {
                  return <LocationCard key={index} compare={this.callback} compareSelected={this.state.compareIdList.includes(value.id)} id={value.id} city={value.city} country={value.country} timezone={value.timezone} region={value.region} area_code={value.area_code} img={value.image} city_url={"/locations/" + value.id} pop={value.population} elevation={value.elevation} searched={this.state.searched} query={this.state.query} />

                })}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default LocationListPage

const mobileButtonStyle = {
  backgroundColor: 'rgb(0, 119, 255)',
  width: '85vw',
  borderRadius: '5px',
  padding: '7px',
  margin: '5px',
  fontSize: '30px',
  lineHeight: '70px'
}

const sliderStyle = {
  width: '150px'
}

const inactiveDropdown = {
  backgroundColor: 'white',
  color: 'black'
}

const activeDropdown = {
  fontWeight: '1000',
  backgroundColor: 'rgb(0, 119, 255)',
  color: 'white'
}