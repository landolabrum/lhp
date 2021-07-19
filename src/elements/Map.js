import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';



export class MapContainer extends Component {

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,

        });
    state = {
        selectedPlace: 'LHP' 
    }
    render() {
        return (
            <div

                style={{ width: '100%', height: 400, position: 'relative' }}
            >
                <a rel="noopener noreferrer" target="_blank" href="https://www.google.com/maps/dir//LHPLLC,+358+W+5900+S,+Murray,+UT+84107">
                                                                    
                    <h4>Directions</h4>
                    <p>LHPLLC, 358 W 5900 S, Murray, UT 84107</p>
                    <Map

                        google={this.props.google}
                        zoom={14}

                        initialCenter={{
                            lat: 40.6434,
                            lng: -111.90
                        }}
                    >

                        <Marker onClick={this.onMarkerClick}
                            />

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                <h1>{this.state.selectedPlace}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                </a>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCs2C3ErvkDU8tUGEuRrtAKPfu6upM66Mc')
})(MapContainer)

// https://www.google.com/maps/place/Paul+Dowland+Tile+%26+Countertops/@40.6433467,-111.902224822248,17z/data=!3m1!4b1!4m5!3m4!1s0x8752899c9350a41f:0x256b318901cd331a!8m2!3d40.6433467!4d-111.902224800361