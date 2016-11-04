var React = require('react');
var CommutForm = require('CommutForm');
var CommutMessage = require('CommutMessage');
var CommutResults = require('CommutResults');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var tsa_precheck = require('tsa_precheck');
var tsa_wait_time = require('tsa_wait_time');
var TsaWaitTimeMessage = require('TsaWaitTimeMessage');
var TsaPrecheckMessage = require('TsaPrecheckMessage');



const ARC_DE_TRIOMPHE_POSITION = {
  lat: 48.873947,
  lng: 2.295038
};

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

class Map extends React.Component {
  constructor() {
    super();
    this.panToArcDeTriomphe = this.panToArcDeTriomphe.bind(this);
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: EIFFEL_TOWER_POSITION,
      zoom: 16
    });
  }

  panToArcDeTriomphe() {
    console.log(this)
    this.map.panTo(ARC_DE_TRIOMPHE_POSITION);
  }
}

var Commut = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      startingAddress: '123 Main St',
      departureAirport: 'PDX',
      flightNumber: 'US123',
      apiVar1: "34 minutes",
      apiVar2: "0-10 minutes",
      apiVar3: "44 minutes",
      apiVar4: "47°F",
      temp: 53
    }
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  handleSearch: function (startingAddress) {
    //We're setting that to this because the "this" binding get's lost when we set setState below. Setting that to this, fixes that temporarily
    var that = this;

    openWeatherMap.getTemp(startingAddress).then(function (temp) {
      that.setState({
        startingAddress: startingAddress,
        temp: temp
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

  },

  render: function () {
    var {startingAddress, departureAirport, flightNumber} = this.state;

    var {apiVar1, apiVar2, apiVar3, apiVar4} = this.state;

    var {temp, startingAddress} = this.state;

    const mapStyle = {
          width: 500,
          height: 300,
          border: '1px solid black'
        };
    return (
      <div className="row">
        <div className="small-12 large-expand columns">
          <div className="large-4 columns">
            <CommutForm onNewData={this.handleNewData} onSearch={this.handleSearch}/>
          </div>
          <div>
            <div className="large-4 columns">
              <CommutMessage startingAddress={startingAddress} departureAirport={departureAirport} flightNumber={flightNumber}/>
              <WeatherMessage temp={temp} startingAddress={startingAddress}/>
            </div>
            <div className="large-4 columns">
              <CommutResults apiVar1={apiVar1} apiVar2={apiVar2} apiVar3={apiVar3} apiVar4={apiVar4}/>
              <TsaPrecheckMessage/>
              <TsaWaitTimeMessage/>
            </div>
          </div>
        </div>
        <div>
          <button onClick={this.panToArcDeTriomphe}>Go to Arc De Triomphe</button>
          <div ref="map" style={mapStyle}>I should be a map!</div>
        </div>
      </div>
    )
  }
});

module.exports = Commut;
