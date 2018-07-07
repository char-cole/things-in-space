import React, { Component } from 'react';
import './App.css';
import FlyoverCalc from './FlyoverCalc'
import {
  Container,
  Row,
  Col
} from 'reactstrap';

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

const rowStyle = {
  minWidth: "100px",
  margin: "20px auto"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      countryLoaded: false,
      passLoaded: false,
      nextPass: {
        date: "",
        duration: ""
      },
      countryList: [],
      regionList: [],
      cityList: [],
      selectedCountry: ["Chad", "td"],
      selectedRegion: "Chari-Baguirmi Region",
      selectedCity: {
        city: "Baguirmi",
        country: "td",
        latitude: "11.42146969",
        longitude: "16.34638023",
        region: "Chari-Baguirmi Region"
      },
    };
    this.handleCountry = this.handleCountry.bind(this);
    this.handleRegion = this.handleRegion.bind(this);
    this.handleCity = this.handleCity.bind(this);
  };


  handleCountry(event) {
    const tempArray = event.target.value.split(',');
    this.setState({ selectedCountry: tempArray });
    fetch(battutaURL+"region/"+tempArray[1]+"/all/?key="+battutaKey)
          .then(res => res.json())
          .then(
            (result) => {
              const tempTwo = result.map((item) => {
                return item.region;
              })
              this.setState({
                regionList: tempTwo,
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                error
              });
            }
          )
  }
  handleRegion(event) {
    const tempRegion = event.target.value;
    const tempCountry = this.state.selectedCountry[1]
    this.setState({
      selectedRegion: tempRegion,
    });
    fetch(battutaURL+"city/"+tempCountry+"/search/?region="+tempRegion.replace(/\s+/g, '_')+"&key="+battutaKey)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                cityList: result,
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                error
              });
            }
          )
  }
  handleCity(event) {
    const tempName = event.target.value;
    const tempCityFull = this.state.cityList.find(c => c.city === tempName);
    this.setState({ selectedCity: tempCityFull });
    const tempCityLat = this.state.selectedCity.latitude;
    const tempCityLong = this.state.selectedCity.longitude;
    fetch("http://api.open-notify.org/iss-pass.json?lat="+tempCityLat+"&lon="+tempCityLong+"&n=1")
          .then(res => res.json())
          .then(
            (result) => {
              const passDate = new Date(result.response[0].risetime*1000);
              const durationRaw = result.response[0].duration;
              this.setState({
                passLoaded: true,
                nextPass: {
                  date: passDate.toString(),
                  duration: (durationRaw/60).toFixed(0)+":"+(durationRaw%60),
                }
              });
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

  componentDidMount() {
    const tempCityLat = this.state.selectedCity.latitude;
    const tempCityLong = this.state.selectedCity.longitude;

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


    fetch("http://api.open-notify.org/iss-pass.json?lat="+tempCityLat+"&lon="+tempCityLong+"&n=1")
          .then(res => res.json())
          .then(
            (result) => {
              const passDate = new Date(result.response[0].risetime*1000);
              const durationRaw = result.response[0].duration;
              this.setState({
                passLoaded: true,
                nextPass: {
                  date: passDate.toString(),
                  duration: (durationRaw/60).toFixed(0)+":"+(durationRaw%60),
                }
              });
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
    const { error, countryLoaded, passLoaded, nextPass, countryList, regionList, cityList, selectedCountry, selectedRegion, selectedCity } = this.state;
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
        return <option value={item.city} key={item.city}>{item.city}</option>
      }
    })
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!countryLoaded || !passLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <Container>
          <Row>
            <Col style={rowStyle}>
            </Col>
            <Col style={rowStyle}>
              <select value={selectedCountry.name} onChange={this.handleCountry}>
                {optionsCountry}
              </select>
            </Col>
            <Col style={rowStyle}>
            </Col>
            <Col style={rowStyle}>
              <select value={selectedRegion} onChange={this.handleRegion}>
                {optionsRegion}
              </select>
            </Col>
            <Col style={rowStyle}>
            </Col>
            <Col style={rowStyle}>
              <select value={selectedCity.city} onChange={this.handleCity}>
                {optionsCity}
              </select>
            </Col>
            <Col style={rowStyle}>
            </Col>
            <Col-12-xs style={rowStyle}>
              {<FlyoverCalc city={selectedCity.city} country={selectedCity.region} lat={selectedCity.latitude} long={selectedCity.longitude} next={nextPass.date} duration={nextPass.duration}/>}
            </Col-12-xs>
          </Row>
        </Container>
        </div>
      );
    }
  }
}

export default App;
