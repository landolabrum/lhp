import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Container, Row, Col, Icon, Divider, } from 'react-materialize';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';






const AnyReactComponent = ({ text }) => <div>{text}</div>;
const api_key = 'AIzaSyBh-HkOlEee6_mVUEHPddbp5fbxywlq58Y'



export class MapContainer extends Component {

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,

        });
    state = {
        selectedPlace: { name: 'LHP' }
    }
    render() {
        return (
            <div

                style={{ width: '100%', height: 400, position: 'relative' }}

            >


                <a target="_blank" href="https://www.google.com/maps/dir//''/@40.5343169,-111.9178723,10z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8752899c9350a41f:0x256b318901cd331a!2m2!1d-111.9000361!2d40.6433467!3e0">
                    <h4>Directions</h4>
                    <Map

                        google={this.props.google}
                        zoom={14}

                        initialCenter={{
                            lat: 40.6434,
                            lng: -111.90
                        }}
                    >

                        <Marker onClick={this.onMarkerClick}
                            name={
                                <a target="_blank" href="https://www.google.com/maps/dir//''/@40.5343169,-111.9178723,10z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8752899c9350a41f:0x256b318901cd331a!2m2!1d-111.9000361!2d40.6433467!3e0">
                                    <h4>Directions</h4>
                                </a>
                            } />

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                </a>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (api_key)
})(MapContainer)

// https://www.google.com/maps/place/Paul+Dowland+Tile+%26+Countertops/@40.6433467,-111.902224822248,17z/data=!3m1!4b1!4m5!3m4!1s0x8752899c9350a41f:0x256b318901cd331a!8m2!3d40.6433467!4d-111.902224800361