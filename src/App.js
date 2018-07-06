import React, { Component } from 'react';
import './App.css';

import FlyoverCalc from './FlyoverCalc'

/*
List of countries called from bAPI and saved to state as objects with .name and .code

User selects country from (list?)
User selects region from (list?)
User selects city/county from (list?)

Take lat/long coords from bAPI for given city an store in state.lat and state.lon
Using .lat and .lon, call ISS tracker
Display next 3 passes of the ISS over chosen city

Separately, display current ISS coordinates
*/

const battutaKey = "ad3486b7c0cf4595f01223963f58f91a";
const battutaURL = "http://battuta.medunes.net/api/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      countryLoaded: false,
      regionLoaded: false,
      cityLoaded: false,
      passLoaded: false,
      nextPass: "",
      countryList: [],
      regionList: [],
      cityList: [],
      selectedCountry: ["Chad", "td"],
      selectedRegion: "Chari-Baguirmi Region",
      selectedCity: "Baguirmi",
    };
    this.handleCountry = this.handleCountry.bind(this);
  };

  handleCountry(event) {
    const tempArray = event.target.value.split(',');
    const tempO = {
      name: tempArray[0],
      code: tempArray[1]
    }
    this.setState({ selectedCountry: tempO });
  }
  handleRegion(event) {
    this.setState({ selectedRegion: event.target.value });
  }
  handleCity(event) {
    this.setState({ selectedCity: event.target.value });
  }

  componentDidMount() {
    fetch(battutaURL+"country/all/?key="+battutaKey)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                countryLoaded: true,
                countryList: result,
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                countryLoaded: true,
                error
              });
            }
          )
    fetch(battutaURL+"region/"+this.state.selectedCountry[1]+"/all/?key="+battutaKey)
          .then(res => res.json())
          .then(
            (result) => {
              const tempArray = result.map((item) => {
                return Object.values(item);
              })
              this.setState({
                regionLoaded: true,
                regionList: tempArray,
              });
              console.log(this.state.regionList)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                regionLoaded: true,
                error
              });
            }
          )
    fetch(battutaURL+"city/"+this.state.selectedCountry[1]+"/search/?region="+this.state.selectedRegion.replace(/\s+/g, '_')+"&key="+battutaKey)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                cityLoaded: true,
                cityList: result,
              });
              console.log(this.state.cityList)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                regionLoaded: true,
                error
              });
            }
          )
    fetch("http://api.open-notify.org/iss-pass.json?lat=70&lon=100&n=1")
          .then(res => res.json())
          .then(
            (result) => {
              const passDate = new Date(result.response[0].risetime*1000);
              this.setState({
                passLoaded: true,
                nextPass: passDate.toString()
              });
              console.log("Next pass: "+passDate+" (duration: "+(result.response[0].duration/60).toFixed(2)+" minutes)");
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                passLoaded: true,
                error
              });
            }
          )
  }

  render() {
    const { error, countryLoaded, regionLoaded, cityLoaded, passLoaded, nextPass, countryList, regionList, cityList, selectedCountry, selectedRegion, selectedCity } = this.state;
    const optionsCountry = countryList.map(item => {
      if (countryList) {
        const tempArray = Object.values(item);
        return <option value={tempArray} key={item.code}>{item.name}</option>
      }
    })
    const optionsRegion = regionList.map(item => {
      if (regionList) {
        return <option value={item} key={item}>{item}</option>
      }
    })
    const optionsCity = cityList.map(item => {
      if (cityList) {
        return <option value={item} key={item.city}>{item.city}</option>
      }
    })
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!countryLoaded || !regionLoaded || !cityLoaded || !passLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div Grid container>
          <div Grid item xs>
            <select value={selectedCountry} onChange={this.handleCountry}>
              {optionsCountry}
            </select>
          </div>
          <div Grid item xs>
            <select value={selectedRegion} onChange={this.handleRegion}>
              {optionsRegion}
            </select>
          </div>
          <div Grid item xs>
            <select value={selectedCity} onChange={this.handleCity}>
              {optionsCity}
            </select>
          </div>
          <div Grid item xs={12}>{<FlyoverCalc city={selectedCity.name} lat={selectedCity.latitude} long={selectedCity.longitude} next={nextPass}/>}</div>
        </div>
      );
    }
  }
}

export default App;
